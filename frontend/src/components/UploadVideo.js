import React, { useState } from "react";

function UploadVideo({ setDisengagementPeriods, setIsLoading }) {
  const [file, setFile] = useState(null);
  const [uploadedVideo, setUploadedVideo] = useState(null);

  const handleUpload = async () => {
    if (!file) return alert("Please select a video file");

    setIsLoading(true);
    const formData = new FormData();
    formData.append("video", file);

    try {
      const response = await fetch("http://127.0.0.1:5001/video/upload", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.success) {
        setDisengagementPeriods(data.disengagement_periods);
        setUploadedVideo(URL.createObjectURL(file));
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert(`Error uploading video: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ 
      width: "500px", 
      height: "250px", 
      overflow: "hidden",
      flexDirection: "column",
      alignItems: "center"
    }}>
      {uploadedVideo ? (
        <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}>
          <video 
            controls 
            src={uploadedVideo}
            style={{
              width: "100%",
              height: "85%",
              objectFit: "contain"
            }} 
          />
          <button
            style={{ marginTop: "15px" }}
            onClick={() => {
              setUploadedVideo(null);
              setFile(null);
              setDisengagementPeriods([]);
            }}
          >
            Upload New Video
          </button>
        </div>
      ) : (
        <div style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <h2>Upload Lecture Video</h2>
          <div style={{flexDirection: 'row', paddingTop: 100}}>
          <input
            type="file"
            accept=".mp3, .mp4, .mov, audio/*"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <button 
            style={{ marginTop: "10px" }}
            onClick={handleUpload}
          >
            Upload & Transcribe
          </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default UploadVideo;
