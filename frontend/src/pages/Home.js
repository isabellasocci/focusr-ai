import React from "react";
import { Link } from "react-router-dom";
import trustedColleges from "../assets/trusted-colleges.png";
import focusrLogo from "../assets/focusr-logo.png";
import additionalVideo from "../assets/additional-video.mp4";

function Home() {
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
            
            <Link to="/upload" style={{ position: "absolute", top: "30px", right: "30px" }}>
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
                    <b>Dashboard</b>
                </button>
            </Link>
            
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "100%", marginTop: "100px" }}>
                <div style={{ textAlign: "left", maxWidth: "600px" }}>
                    <p style={{ 
                        fontSize: "4.2rem", 
                        textShadow: "4px 4px 12px rgba(0, 116, 217, 0.7)"
                    }}>
                        <b>People lose focus; we bring it back.</b>
                    </p>
                    <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>
                        <b>Any mov, mp3, or mp4 video → Instant engagement report, tracking everything you missed.</b>
                    </p>
                    <Link to="/upload" style={{ marginTop: "30px", display: "inline-block" }}>
                        <button style={{ 
                            backgroundColor: "#0074D9", 
                            color: "white", 
                            padding: "18px 36px", 
                            borderRadius: "15px", 
                            fontSize: "1.2rem", 
                            fontWeight: "bold", 
                            border: "none", 
                            cursor: "pointer", 
                            transition: "all 0.3s ease-in-out",
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
                            <b>Get Started</b>
                        </button>
                    </Link>
                </div>
                <video controls autoPlay muted playsInline style={{ width: "50%", maxWidth: "600px", marginLeft: "50px", borderRadius: "15px", overflow: "hidden", boxShadow: "0px 0px 15px 4px rgba(0, 116, 217, 0.7)" }}>
                    <source src={additionalVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            
            <div style={{ marginTop: "100px", display: "flex", justifyContent: "center" }}>
                <img src={trustedColleges} alt="Trusted by students at 5,000+ colleges" style={{ width: "75%", maxWidth: "100000px" }} />
            </div>
        </div>
    );
}

export default Home;
