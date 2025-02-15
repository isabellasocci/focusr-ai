# backend/routes/audio_routes.py
from flask import Blueprint, request, jsonify
from audio_processing.transcribe_audio import transcribe_audio
from audio_processing.record_audio import record_audio

audio_bp = Blueprint('audio', __name__)

@audio_bp.route('/upload', methods=['POST'])
def upload_audio():
    file = request.files['audio']
    file.save("lecture.wav")
    transcript = transcribe_audio("lecture.wav")
    return jsonify({"transcript": transcript})

@audio_bp.route('/record', methods=['POST'])
def record():
    duration = int(request.json.get('duration', 60))  # Default to 60 seconds
    file_path = record_audio(duration)
    return jsonify({"file_path": file_path})