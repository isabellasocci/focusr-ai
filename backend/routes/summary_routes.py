# backend/routes/summary_routes.py
from flask import Blueprint, request, jsonify
from ai_processing.summarize_notes import generate_summary

summary_bp = Blueprint('summary', __name__)

@summary_bp.route('/generate', methods=['POST'])
def generate():
    data = request.json
    transcript = data['transcript']
    disengaged_timestamps = data['disengaged_timestamps']
    summary = generate_summary(transcript, disengaged_timestamps)
    return jsonify({"summary": summary})