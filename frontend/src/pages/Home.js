import React from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <div style={{ textAlign: "center", padding: "50px" }}>
            <h1>welcome to focusr.ai</h1>
            <p>track your engagement during lectures - we'll catch what you didn't</p>
            <p>upload a recording of yourself during your lecture, and get personalized notes in seconds!</p>
            <Link to="/upload">
                <button style={{ padding: "10px 20px", fontSize: "16px" }}>
                    yes pls
                </button>
            </Link>
        </div>
    );
}

export default Home;
