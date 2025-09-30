import React from 'react'
import './Instructor.css'
import deepaksir from './deepak.jpeg'
import seemamaam from './seema.jpeg'
import komalmaam from './komal.jpeg'

const Instructor = () => {
  const cards = [
    {
      id: 1,
      image: deepaksir,
      title: "(Hon) Maj. Dr. Deepak Rao",
      description: "Master instructor in the art and philosophy of Jeet Kune Do and Pioneer of Modern CQB Training"
    },
    {
      id: 2,
      image: seemamaam,
      title: "Dr. Seema Rao",
      description: "Wonder Woman of India & India's first female special forces trainer"
    },
    {
      id: 3,
      image: komalmaam,
      title: "Dr. Komal Rao",
      description: "Balance your digital life with mindfulness and physical wellness"
    },
    
  ]

  return (
    <section id="instructor" className="instructor-section">
      <div className="instructor-container">
        <h1 className="instructor-title">Meet the Lengendary Instructors</h1>
       
        
        <div className="cards-grid">
          {cards.map(card => (
            <div key={card.id} className="card">
              <div className="card-image-container">
                <img 
                  src={card.image} 
                  alt={card.title}
                  className="card-image"
                />
                <div className="card-overlay"></div>
              </div>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Instructor