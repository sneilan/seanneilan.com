from playwright.sync_api import sync_playwright, Browser, Page, PlaywrightContextManager
from PIL import Image, ImageDraw
from typing import List
from dataclasses import dataclass
from utils.fonts import get_font
import logging


@dataclass
class BoundingBox:
    """Bounding box coordinates for an element."""
    x: float
    y: float
    width: float
    height: float


@dataclass
class ElementData:
    """Data for a clickable element."""
    box: BoundingBox


class BrowserSession:
    """Manages a browser session for web automation."""

    def __init__(self):
        self.playwright_context: PlaywrightContextManager | None = None
        self.browser: Browser | None = None
        self.page: Page | None = None

    def init_browser(self):
        """Initialize browser, page, and playwright context."""
        logging.debug("Starting browser initialization...")
        self.playwright_context = sync_playwright().start()
        logging.debug("Launching Chromium browser...")
        self.browser = self.playwright_context.chromium.launch(headless=True)
        self.page = self.browser.new_page()
        logging.debug("Browser initialized successfully")

    def capture_screenshot(self, output_path: str) -> tuple[str, List[ElementData]]:
        """Capture screenshot and detect clickable elements.

        Args:
            output_path: Path where to save the screenshot

        Returns:
            tuple: (screenshot_path, elements_data)
        """
        if not self.page:
            raise RuntimeError("Browser not initialized. Call init_browser() first.")

        logging.debug("Detecting clickable elements...")
        # Get all clickable elements
        clickable_selectors = [
            'button', 'a', '[role="button"]',
            '[onclick]', 'input[type="submit"]'
        ]
        elements_data = []

        for selector in clickable_selectors:
            elements = self.page.locator(selector).all()
            for elem in elements:
                try:
                    box = elem.bounding_box()
                    if box and box['width'] > 0 and box['height'] > 0:
                        bounding_box = BoundingBox(
                            x=box['x'],
                            y=box['y'],
                            width=box['width'],
                            height=box['height']
                        )
                        elements_data.append(ElementData(box=bounding_box))
                except:
                    pass  # Element might not be visible or have been removed

        logging.debug(f"Found {len(elements_data)} clickable elements")

        # Take screenshot
        logging.debug("Taking screenshot...")
        self.page.screenshot(path=output_path)

        return output_path, elements_data

    def annotate_screenshot(
        self,
        screenshot_path: str,
        elements_data: List[ElementData],
        output_path: str
    ):
        """Annotate screenshot with numbered markers.

        Args:
            screenshot_path: Path to the screenshot file
            elements_data: List of element data with bounding boxes
            output_path: Path where to save the annotated screenshot
        """
        logging.debug("Annotating screenshot with markers...")
        img = Image.open(screenshot_path)
        draw = ImageDraw.Draw(img)

        # Get cross-platform font
        font = get_font(20)

        for i, elem_data in enumerate(elements_data):
            box = elem_data.box
            x, y, w, h = box.x, box.y, box.width, box.height

            # Draw red box and number
            draw.rectangle([x, y, x+w, y+h], outline='red', width=2)
            draw.text((x, max(0, y-20)), str(i), fill='red', font=font)

        # Save annotated screenshot
        img.save(output_path)
        logging.debug(f"Annotated screenshot saved to {output_path}")

    def close(self):
        """Close browser and cleanup."""
        if self.browser:
            logging.debug("Closing browser...")
            self.browser.close()
        if self.playwright_context:
            self.playwright_context.stop()
