import React, { useState } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Nguyen',
      location: 'San Francisco',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
      text: 'Dwello truly cared about my clients needs and preferences, and helped me find the perfect home in the Bay Area. Their attention to detail are unmatched.'
    },
    {
      id: 2,
      name: 'Michael Rodriguez',
      location: 'San Diego',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
      text: 'I had a fantastic experience working with Dwello. Their personalized service exceeded my expectations. I found my dream home and the process was easy!'
    },
    {
      id: 3,
      name: 'Emily Johnson',
      location: 'Los Angeles',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
      text: 'Dwello helped me with the dream of owning a home a reality. Their exceptional support guided me through every step of the process. Highly recommend!'
    }
  ];

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What People Say<br/>About Dwello</h2>
        <div className="testimonials-slider">
          <div className="testimonial-card">
            <img src={testimonials[currentSlide].image} alt={testimonials[currentSlide].name} className="testimonial-image"/>
            <div className="testimonial-content">
              <div className="testimonial-header">
                <div>
                  <h4>{testimonials[currentSlide].name}</h4>
                  <p>{testimonials[currentSlide].location}</p>
                </div>
                <div className="rating">{'⭐'.repeat(testimonials[currentSlide].rating)}</div>
              </div>
              <p className="testimonial-text">{testimonials[currentSlide].text}</p>
            </div>
          </div>
        </div>
        <div className="slider-controls">
          <button onClick={() => setCurrentSlide((currentSlide - 1 + testimonials.length) % testimonials.length)}>←</button>
          <button onClick={() => setCurrentSlide((currentSlide + 1) % testimonials.length)}>→</button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
