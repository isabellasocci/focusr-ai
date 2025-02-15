# backend/app.py
from flask import Flask
from routes.audio_routes import audio_bp
from routes.engagement_routes import engagement_bp
from routes.summary_routes import summary_bp

app = Flask(__name__)
app.register_blueprint(audio_bp, url_prefix="/audio")
app.register_blueprint(engagement_bp, url_prefix="/engagement")
app.register_blueprint(summary_bp, url_prefix="/summary")

if __name__ == '__main__':
    app.run(debug=True)