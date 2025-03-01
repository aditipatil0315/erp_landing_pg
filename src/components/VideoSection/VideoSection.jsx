import React, { useRef, useState } from "react";
import "./VideoSection.css";

const VideoSection = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="video-section">
      <h2>Transform Your Business with Custom Solutions</h2>
      <div className="video-container" onClick={toggleMute}>
        <video ref={videoRef} autoPlay loop muted playsInline>
          <source src="/videos/demo_2.mp4" type="video/mp4; codecs=avc1.42E01E, mp4a.40.2"  />
          Your browser does not support the video tag.
        </video>
        <div className="sound-indicator">{isMuted ? "🔇 Click for Sound" : "🔊 Sound On"}</div>
      </div>
    </section>
  );
};

export default VideoSection;
