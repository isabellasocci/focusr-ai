import React, { useState } from "react";
import { Link } from "react-router-dom";
import EngagementChart from "../components/EngagementChart";
import Summary from "../components/Summary";
import focusrLogo from "../assets/focusr-logo.png";

function Upload() {
    const [transcript, setTranscript] = useState("");
    const [timestamps, setTimestamps] = useState([]);

    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            minHeight: "100vh", 
            background: "#0e1014", 
            padding: "20px", 
            color: "white", 
            fontFamily: "Montserrat, sans-serif", 
            position: "relative"
        }}>
            <img 
                src={focusrLogo} 
                alt="Focusr AI Logo" 
                style={{ 
                    position: "absolute", 
                    top: "30px", 
                    left: "30px", 
                    width: "300px", 
                    height: "auto"
                }} 
            />

            <Link to="/" style={{ position: "absolute", top: "30px", right: "30px" }}>
                <button style={{ 
                    backgroundColor: "#0074D9", 
                    color: "white", 
                    padding: "12px 24px", 
                    borderRadius: "15px", 
                    fontSize: "1rem", 
                    fontWeight: "bold", 
                    border: "none", 
                    cursor: "pointer", 
                    transition: "all 0.3s ease-in-out",
                    width: "clamp(90px, 15vw, 150px)",
                    height: "clamp(30px, 4.5vh, 45px)",
                    fontFamily: "Montserrat, sans-serif"
                }}
                        onMouseOver={(e) => {
                            e.target.style.backgroundColor = "#0056b3";
                            e.target.style.transform = "scale(1.1)";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.backgroundColor = "#0074D9";
                            e.target.style.transform = "scale(1)";
                        }}>
                    <b>Home</b>
                </button>
            </Link>

            <h1 style={{ fontSize: "4.2rem", fontWeight: "bold", marginTop: "100px", textShadow: "4px 4px 12px rgba(0, 116, 217, 0.7)" }}>Engagement Dashboard</h1>
            
            <div style={{ marginTop: "40px", width: "60%", textAlign: "center" }}>
                <input 
                    type="file" 
                    style={{ 
                        padding: "12px", 
                        borderRadius: "15px", 
                        backgroundColor: "#0074D9", 
                        color: "white", 
                        fontSize: "1rem", 
                        cursor: "pointer", 
                        border: "2px solid #0e1014"
                    }}
                />
            </div>
            
            <div style={{ marginTop: "80px", width: "75%", display: "flex", justifyContent: "flex-start" }}>
                <EngagementChart timestamps={timestamps} />
                <div style={{ marginLeft: "100px" }}>
                    <Summary transcript={transcript} timestamps={timestamps} />
                </div>
            </div>
            
            
        </div>
    );
}

export default Upload;
