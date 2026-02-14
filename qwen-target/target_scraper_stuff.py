from pydantic import BaseModel
from utils.browser import BrowserSession, ElementData
from typing import List


class TargetHomepage(BaseModel):
    screenshot_path: str
    annotated_screenshot_path: str
    elements_data: List[ElementData]


def get_annotated_screenshot_of_target_homepage() -> TargetHomepage:
    # Capture and annotate screenshot before processing
    browser_session = BrowserSession()
    browser_session.init_browser()

    # Navigate to target URL
    response = browser_session.page.goto("https://target.com")
    browser_session.page.wait_for_load_state('networkidle')

    # Capture screenshot and detect elements
    screenshot_path = "target_screenshot.png"
    screenshot_path, elements_data = browser_session.capture_screenshot()
    annotated_screenshot_path = "target_screenshot_annotated.png"
    browser_session.annotate_screenshot(screenshot_path, elements_data, annotated_screenshot_path)
    logging.info(f"Screenshot saved. Prepping inputs.")

    browser_session.close()

    return TargetHomepage(
        screenshot_path=screenshot_path, 
        annotated_screenshot_path=annotated_screenshot_path,
        elements_data=elements_data
    )


def screenshot_click_on_numbered_box_in_target_homepage(elements_data: List[ElementData], box_number: int) -> str:
    # Get element data
    elem_data = elements_data[marker_number]
    box = elem_data.box

    # Click at center of element
    click_x = box.x + box.width / 2
    click_y = box.y + box.height / 2

    logging.info(f"Clicking element {marker_number} at ({click_x:.1f}, {click_y:.1f})")
    browser_session.page.mouse.click(click_x, click_y)

    # Wait for page to respond to click
    logging.info("Waiting for page response...")
    try:
        # Wait for network activity to settle (most reliable for dynamic pages)
        browser_session.page.wait_for_load_state('networkidle', timeout=5000)
    except:
        # Fallback: ensure basic page load completes
        try:
            browser_session.page.wait_for_load_state('load', timeout=3000)
        except:
            # Some clicks (like dropdowns) don't trigger navigation
            logging.info("No navigation detected, continuing...")

    # Take screenshot of result
    after_screenshot_path = 'after_click.png'
    browser_session.page.screenshot(path=after_screenshot_path)
    logging.info(f"Screenshot after click saved to {after_screenshot_path}")

    # Cleanup
    browser_session.close()

    return after_screenshot_path
