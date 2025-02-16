import os
from flask import Blueprint, request, jsonify
from flask_cors import CORS
import logging
from video_processor import process_video, find_no_strands


video_bp = Blueprint('video', __name__)
CORS(video_bp)

# Set up logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

UPLOADS_FOLDER = os.path.join(os.path.dirname(os.path.abspath(__file__)), "uploads")

@video_bp.route('/upload', methods=['POST'])
def upload_video():
    try:
        logger.debug("Received upload request")
        
        if 'video' not in request.files:
            logger.error("No video file in request")
            return jsonify({"error": "No video file provided"}), 400
            
        file = request.files['video']
        if not file:
            logger.error("Empty file object")
            return jsonify({"error": "Empty file"}), 400
        
        logger.info(f"Processing file: {file.filename}")
        
        if not os.path.exists(UPLOADS_FOLDER):
            os.makedirs(UPLOADS_FOLDER)
            
        file_path = os.path.join(UPLOADS_FOLDER, file.filename)
        file.save(file_path)
        
        logger.info("Starting video processing...")
        data = process_video(file_path)
        logger.info("Video processing completed")
        
        result = find_no_strands(data)

        disengagement_periods = [
            {
                "start_time": start,
                "end_time": end,
                "duration": end - start,
                "message": f"Disengaged from {start} to {end} seconds"
            }
            for start, end in result
        ]
        
        return jsonify({
            "success": True,
            "disengagement_periods": disengagement_periods
        })
        
    except Exception as e:
        logger.error(f"Upload error: {str(e)}")
        return jsonify({"error": str(e)}), 500
