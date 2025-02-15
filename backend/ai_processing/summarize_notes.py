# backend/ai_processing/summarize_notes.py
import requests
import os

def generate_summary(transcript, disengaged_timestamps):
    perplexity_api_key = os.getenv("PERPLEXITY_API_KEY")
    url = "https://api.perplexity.ai/generate"
    headers = {
        "Authorization": f"Bearer {perplexity_api_key}",
        "Content-Type": "application/json"
    }
    payload = {
        "model": "perplexity-ai",
        "prompt": f"""
        Here is a lecture transcript:
        {transcript}
        The student was disengaged at these timestamps: {disengaged_timestamps}.
        Summarize the lecture, but emphasize the missed parts to help the student catch up.
        """,
        "max_tokens": 500
    }
    response = requests.post(url, headers=headers, json=payload)
    return response.json().get("text", "Error generating summary")