# backend/routes/engagement_routes.py
from flask import Blueprint, request, jsonify

data_store = []  # Temporary in-memory storage for engagement data

engagement_bp = Blueprint('engagement', __name__)

@engagement_bp.route('/log', methods=['POST'])
def log_engagement():
    data = request.json
    data_store.append(data)  # Store engagement data
    return jsonify({"message": "Engagement logged successfully", "data": data})

@engagement_bp.route('/get', methods=['GET'])
def get_engagement():
    return jsonify({"engagement_data": data_store})