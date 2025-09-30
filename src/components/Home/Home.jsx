import React, { useState, useEffect } from 'react'
import './Home.css'

// Import local images
import slide1 from './jkd.jpeg'
import slide2 from './maam_and_sir.jpeg'
import slide3 from './jkd.jpeg'
import slide4 from './jkd.jpeg'
import slide5 from './jkd.jpeg'

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: slide1,
      title: "Welcome to the Web Dojo",
      description: "Where digital warriors train and excel in the art of web development"
    },
    {
      id: 2,
      image: slide2,
      title: "Hola",
      description: "Embrace the global community of coders and creators"
    },
    {
      id: 3,
      image: slide3,
      title: "Heal your mind and strengthen your body",
      description: "Balance your digital life with mindfulness and physical wellness"
    },
    {
      id: 4,
      image: slide4,
      title: "Master Your Craft",
      description: "From beginner to expert, transform your skills through disciplined practice"
    },
    {
      id: 5,
      image: slide5,
      title: "Join Our Community",
      description: "Connect with like-minded individuals on the path to mastery"
    }
  ]

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <section id="home" className="home-section">
      <div className="home-container">
        <h1 className="home-title">Web Dojo</h1>
        <p className="home-subtitle">Where Code Meets Discipline</p>
        
        <div className="carousel-container">
          <div className="carousel">
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={slide.id} className="carousel-slide">
                  <div className="slide-image-container">
                    <img 
                      src={slide.image} 
                      alt={slide.title}
                      className="slide-image"
                    />
                    <div className="slide-overlay"></div>
                  </div>
                  <div className="slide-content">
                    <h3 className="slide-title">{slide.title}</h3>
                    <p className="slide-description">{slide.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button className="carousel-btn carousel-btn-prev" onClick={prevSlide}>
              ‹
            </button>
            <button className="carousel-btn carousel-btn-next" onClick={nextSlide}>
              ›
            </button>

            {/* Indicators */}
            <div className="carousel-indicators">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home