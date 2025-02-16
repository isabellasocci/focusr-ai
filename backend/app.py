from flask import Flask, request, jsonify
from flask_cors import CORS
from video_routes import video_bp

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return "Flask server is running"

@app.errorhandler(500)
def internal_error(e):
    return {"error": str(e)}, 500

@app.errorhandler(404)
def not_found(e):
    return {"error": "Resource not found"}, 404

app.register_blueprint(video_bp, url_prefix="/video")

@app.route('/summary/generate', methods=['POST', 'OPTIONS'])
def generate_summary():
    if request.method == 'OPTIONS':
        return jsonify({}), 200
        
    data = request.json
    # Your summary generation logic here
    return jsonify({"summary": "Summary text here"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
