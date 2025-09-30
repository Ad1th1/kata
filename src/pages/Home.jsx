import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="welcome-container">
        <h1 className="welcome-title">Welcome to our Web Dojo</h1>
        <p className="welcome-subtitle">Where knowledge meets practice</p>
        <div className="dojo-features">
          <div className="feature-card">
            <h3>Learn</h3>
            <p>Master new skills with expert guidance</p>
          </div>
          <div className="feature-card">
            <h3>Practice</h3>
            <p>Apply your knowledge in real-world scenarios</p>
          </div>
          <div className="feature-card">
            <h3>Excel</h3>
            <p>Achieve excellence through dedicated training</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;