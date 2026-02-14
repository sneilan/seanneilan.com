def get_prompt(annotated_screenshot_path: str):
    return [
        {
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "image": annotated_screenshot_path,
                },
                {"type": "text", "text": "This image shows numbered markers overlaid on clickable elements. Which number is the Account button? Reply with ONLY the number."},
            ],
        }
    ]
