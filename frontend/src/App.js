import React, { useState } from "react";
import UploadAudio from "./components/UploadAudio";
import EngagementChart from "./components/EngagementChart";
import Summary from "./components/Summary";
import "./App.css";

function App() {
    const [transcript, setTranscript] = useState("");
    const [timestamps, setTimestamps] = useState([]);

    return (
        <div className="App">
            <h1>focusr.ai</h1>
            <UploadAudio setTranscript={setTranscript} />
            <EngagementChart timestamps={timestamps} />
            <Summary transcript={transcript} timestamps={timestamps} />
        </div>
    );
}

export default App;
