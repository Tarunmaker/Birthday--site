import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [name, setName] = useState("");
  const [wish, setWish] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!wish.trim()) return; // stop empty wishes
    setSubmitted(true);
  };

  return (
    <div className="container">
      {!submitted ? (
        <div className="card">
          <h1>🎂 Happy Birthday! 🎉</h1>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <textarea
            placeholder="Write your wish..."
            value={wish}
            onChange={(e) => setWish(e.target.value)}
          />
          <button onClick={handleSubmit}>Send Wish 💌</button>
        </div>
      ) : (
        <div className="card">
          <h2>Thank you, {name || "Friend"} 💖</h2>
          <p>Your wish has been sent 🎁</p>
        </div>
      )}
    </div>
  );
}
