import React, { useEffect, useState } from "react";
import "./LoadingScreen.css";


const LoadingScreen: React.FC<{ onFinish: () => void }> = ({ onFinish }) => {
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const barTimer = setTimeout(() => setShowBar(true), 1500);
    const finishTimer = setTimeout(() => onFinish(), 3000);
    return () => {
      clearTimeout(barTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className="loading-screen">
      {!showBar ? (
        <div className="logo-container">
          <div className="logo-icon">🍽️</div>
          <div className="logo-text">Staffy</div>
        </div>
      ) : (
        <div className="loading-bar-container">
          <div className="loading-bar-pill">
            <div className="loading-bar-fill" />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
