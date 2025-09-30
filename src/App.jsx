import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Web Dojo</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      
      <section id="home" className="hero-section">
        <h1>Welcome to our Web Dojo</h1>
        <p>Master the art of web development</p>
        <button className="cta-button">Get Started</button>
      </section>
      
      <section id="about" className="about-section">
        <h2>About Our Dojo</h2>
        <p>We train developers in the ancient art of coding</p>
      </section>
      
      <section id="courses" className="courses-section">
        <h2>Our Courses</h2>
        <p>HTML, CSS, JavaScript, React and more</p>
      </section>
      
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <p>Join our coding dojo today</p>
      </section>
    </div>
  )
}

export default App