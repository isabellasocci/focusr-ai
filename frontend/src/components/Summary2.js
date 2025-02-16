import React, { useState, useEffect } from "react";

function Summary({ transcript, timestamps }) {
    const [summary, setSummary] = useState("");

    useEffect(() => {
        if (!transcript) return;

        fetch("http://127.0.0.1:5000/summary/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ transcript, disengaged_timestamps: timestamps }),
        })
        .then(response => response.json())
        .then(data => setSummary(data.summary));
    }, [transcript, timestamps]);

    return (
        <div>
            <h2>AI-Generated Summary</h2>
            <p>{summary || "Summary Generation Feature Coming Soon."}</p>
        </div>
    );
}

export default Summary;
