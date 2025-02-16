# **focusr.ai** 
humans aren't perfect; we'll fill in the gaps

## **Overview**
focusr.ai is a **web app** designed to track student engagement during lectures. It allows students to **record or upload lecture videos**, analyzes their **engagement levels using eye-tracking software**, and generates **AI-enhanced lecture summaries** that emphasize sections where the student was distracted.

## **Features**
- **Upload or Record Lecture Audio/Video**: Supports **MP4, WAV, M4A, and WebM** file formats.
- **Eye Tracking for Engagement Analysis**: Uses **MediaPipe and OpenCV** to detect eye movement and identify disengagement.
- **AI-Powered Summarization**: Integrates **OpenAI's Whisper** and **Sonar by Perplexity** to generate detailed lecture summaries.
- **Visualized Engagement Data**: Provides an **interactive chart** displaying engagement trends over time.
- **Web-Based Interface**: Built with **React & Flask** for seamless user experience.

## **Tech Stack**
### **Frontend (React + Tailwind CSS)**
- React.js (UI Components)
- React Router (Navigation)
- Chart.js (Engagement Visualization)
- Tailwind CSS (Styling)

### **Backend (Flask API + Python)**
- Flask (REST API for file processing & AI interactions)
- OpenAI Whisper (Audio transcription)
- Perplexity - Sonar (lecture summarization)
- MediaPipe (Eye tracking for engagement detection)
- MoviePy (Extracting & processing audio from videos)
- Pydub (Audio compression & conversion)

### **Cloud & Storage**
- Vercel (Frontend Deployment)
- Render / Flask (Backend Hosting)

## **Installation & Setup**
### **Clone our repo**
```sh
git clone https://github.com/yourusername/focusr-ai.git
cd focusr-ai
```

### **Backend Setup (Flask API)**
```sh
cd backend
python -m venv venv
source venv/bin/activate  # (Windows: venv\Scripts\activate)
pip install -r requirements.txt
```

**Set Up API Keys** in `.env` file (create one if missing):
```
OPENAI_API_KEY=your-openai-api-key
PERPLEXITY_API_KEY=your-perplexity-api-key
```

**Run the Flask server:**
```sh
python app.py
```

### **Frontend Setup (React App)**
```sh
cd ../frontend
npm install
npm start  # should run on http://localhost:3000
```

## **Usage**
1. **Go to the upload page** and **upload a lecture video or audio file**.
2. The system **transcribes and analyzes engagement levels** based on eye movement.
3. AI generates a **customized summary** emphasizing areas of disengagement.
4. Review the **engagement chart** to visualize focus levels throughout the lecture.

## **Deployment**
### **Frontend Deployment (Vercel)**
```sh
cd frontend
vercel
```

### **Backend Deployment (Render / Flask on a Cloud Server)**
1. Ensure all dependencies are installed.
2. Deploy via Render / DigitalOcean / AWS Lambda, etc.

## **Future Improvements**
- **Live Eye Tracking** via Webcam
- **Support for Real-Time Audio Processing**
- **Integration with Learning Management Systems (LMS)**
- **Zoom app and API Integration for online classes**

ʕ•ᴥ•ʔ
