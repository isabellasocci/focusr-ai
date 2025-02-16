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
        <div>
            <h2>Upload Lecture Audio</h2>
            <input type="file" accept=".mp3, .mp4, .mov, audio/*" onChange={(e) => setFile(e.target.files[0])} />
            <button onClick={handleUpload}>Upload & Transcribe</button>
        </div>
    );
}

export default UploadAudio;
