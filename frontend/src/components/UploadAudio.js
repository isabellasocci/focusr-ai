import React, { useState } from "react";

function UploadAudio({ setTranscript }) {
    const [file, setFile] = useState(null);

    const handleUpload = async () => {
        if (!file) return alert("Please select an audio file");

        const formData = new FormData();
        formData.append("audio", file);

        const response = await fetch("http://127.0.0.1:5000/audio/upload", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        setTranscript(data.transcript);
    };

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "30px",
            borderRadius: "15px",    
            width: "80%",
            maxWidth: "400px",
            margin: "auto",
            textAlign: "center"
        }}>
            <h2 style={{ fontFamily: "Montserrat, sans-serif", color: "#fff", marginBottom: "20px" }}>Upload Lecture Audio</h2>
            
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                border: "2px dashed #0074D9",
                borderRadius: "10px",
                padding: "12px",
                width: "80%",
                textAlign: "center",
                backgroundColor: "#111",
                cursor: "pointer"
            }}
                onClick={() => document.getElementById("fileInput").click()}>
                <input 
                    id="fileInput"
                    type="file"
                    accept=".mp3, .mp4, .mov, audio/*"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                />
                {file ? <p style={{ margin: 0, fontWeight: "bold", color: "#fff" }}>{file.name}</p> : 
                <p style={{ margin: 0, color: "#0074D9" }}>Drag & Drop your file or <b>Browse</b></p>}
            </div>

            <button 
                style={{ 
                    backgroundColor: "#0074D9", 
                    color: "white", 
                    padding: "10px 20px", 
                    borderRadius: "20px", 
                    fontSize: "1rem", 
                    fontWeight: "bold", 
                    border: "none", 
                    cursor: "pointer", 
                    transition: "all 0.3s ease-in-out",
                    width: "clamp(90px, 15vw, 150px)",
                    height: "clamp(30px, 4.5vh, 45px)",
                    fontFamily: "Montserrat, sans-serif",
                    marginTop: "20px"
                }}
                onMouseOver={(e) => {
                    e.target.style.backgroundColor = "#0056b3";
                    e.target.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                    e.target.style.backgroundColor = "#0074D9";
                    e.target.style.transform = "scale(1)";
                }}
                onClick={handleUpload}
            >
                Transcribe
            </button>
        </div>
    );
}

export default UploadAudio;

