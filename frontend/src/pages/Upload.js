import React, { useState } from "react";
import UploadAudio from "../components/UploadAudio";
import EngagementChart from "../components/EngagementChart";
import Summary from "../components/Summary";

function Upload() {
    const [transcript, setTranscript] = useState("");
    const [timestamps, setTimestamps] = useState([]);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Upload Lecture Recording</h1>
            <UploadAudio setTranscript={setTranscript} />
            <EngagementChart timestamps={timestamps} />
            <Summary transcript={transcript} timestamps={timestamps} />
        </div>
    );
}

export default Upload;
