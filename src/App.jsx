import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="nav-container">
          <ul className="nav-links">
            <li><a>Home</a></li>
            <li><a>About</a></li>
            <li><a>Courses</a></li>
            <li><a>Contact</a></li>
          </ul>
        </div>
      </nav>
      
      <section className="hero-section">
        <h1>Dr. Deepak Rao, Dr. Seema Rao & Dr. Komal Rao</h1>
        <p>Welcome to our medical practice</p>
      </section>
      
      <section className="about-section">
        <h2>About Our Doctors</h2>
        <div className="content">
          <p>Renowned medical professionals serving the community</p>
        </div>
      </section>
      
      <section className="courses-section">
        <h2>Our Courses</h2>
        <div className="content">
          <p>Medical education and training programs</p>
        </div>
      </section>
      
      <section className="contact-section">
        <h2>Contact Us</h2>
        <div className="content">
          <p>Get in touch with our team</p>
        </div>
      </section>
    </div>
  )
}

export default App