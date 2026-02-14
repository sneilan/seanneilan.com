from PIL import ImageFont


def get_font(size: int = 20):
    """Get font for annotation, trying common cross-platform locations."""

    # Fallback to default font
    return ImageFont.load_default()

    '''
    font_paths = [
        "/System/Library/Fonts/Helvetica.ttc",  # macOS
        "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",  # Linux
        "C:\\Windows\\Fonts\\arial.ttf",  # Windows
    ]

    for path in font_paths:
        try:
            return ImageFont.truetype(path, size)
        except:
            continue

    '''
