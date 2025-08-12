"use client"
import { useEffect, useState } from "react";
import Herosection from "../Components/Blog/Herosection";
import Section2 from "../Components/Blog/Section2";
import HomeShowcase from "../Components/Blog/BlogSection";
import Footer from "../Components/AboutUs/Footer";

const DEMO_USERNAME = "Bharath";
const DEMO_PASSWORD = "Destroyer of worlds";
const SIGNED_KEY = "blog_signed_up";
const USERNAME_KEY = "blog_username";

export default function Blog() {
    const [showSignup, setShowSignup] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const [signedUp, setSignedUp] = useState(false);

    // Restore sign-in state on refresh
    useEffect(() => {
        try {
            const signed = typeof window !== "undefined" ? localStorage.getItem(SIGNED_KEY) : null;
            const savedUser = typeof window !== "undefined" ? localStorage.getItem(USERNAME_KEY) : null;
            if (signed === "true") {
                setSignedUp(true);
            }
            if (savedUser) {
                // Use for welcome text; do not prefill form fields
                setUsername(savedUser);
            }
        } catch {}
    }, []);

    const handleSignup = (e: React.FormEvent) => {
        e.preventDefault();
        if (username !== DEMO_USERNAME || password !== DEMO_PASSWORD) {
            setError("Invalid credentials");
            return;
        }
        setError("");
        setSignedUp(true);
        setShowSignup(false);
        // Persist only signed state and username (never store password)
        try {
            localStorage.setItem(SIGNED_KEY, "true");
            localStorage.setItem(USERNAME_KEY, username);
        } catch {}
        // Clear password from memory
        setPassword("");
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "flex-end", padding: 16 }}>
                {!signedUp && !showSignup && (
                    <button onClick={() => setShowSignup(true)} style={{ padding: 10, borderRadius: 4, background: "#0070f3", color: "white", border: "none" }}>Signup</button>
                )}
            </div>
            {showSignup && !signedUp ? (
                <div style={{ minHeight: "60vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    <form onSubmit={handleSignup} style={{ display: "flex", flexDirection: "column", gap: 12, width: 300, padding: 24, border: "1px solid #ccc", borderRadius: 8, background: "#fff" }}>
                        <h2>Signup</h2>
                        <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} required style={{ padding: 8, borderRadius: 4, border: "1px solid #aaa" }} />
                        <div style={{ position: "relative" }}>
                            <input 
                                type={showPassword ? "text" : "password"} 
                                placeholder="Password" 
                                value={password} 
                                onChange={e => setPassword(e.target.value)} 
                                required 
                                style={{ padding: 8, paddingRight: 40, borderRadius: 4, border: "1px solid #aaa", width: "100%" }} 
                            />
                            <button 
                                type="button" 
                                onClick={() => setShowPassword(!showPassword)}
                                style={{ 
                                    position: "absolute", 
                                    right: 8, 
                                    top: "50%", 
                                    transform: "translateY(-50%)", 
                                    background: "none", 
                                    border: "none", 
                                    cursor: "pointer",
                                    fontSize: "12px",
                                    color: "#666"
                                }}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </button>
                        </div>
                        {error && <div style={{ color: "red" }}>{error}</div>}
                        <button type="submit" style={{ padding: 10, borderRadius: 4, background: "#0070f3", color: "white", border: "none" }}>Continue</button>
                        <button type="button" onClick={() => setShowSignup(false)} style={{ padding: 10, borderRadius: 4, background: "#aaa", color: "white", border: "none" }}>Cancel</button>
                    </form>
                </div>
            ) : (
                <>
                    {signedUp && (
                        <div style={{ textAlign: "center", marginTop: 16, color: "green" }}>Signup successful! Welcome, {username}.</div>
                    )}
                    <Herosection />
                    <Section2 canEdit={signedUp} />
                    <HomeShowcase canEdit={signedUp} username={username} />
                    <Footer />
                </>
            )}
        </div>
    );
}