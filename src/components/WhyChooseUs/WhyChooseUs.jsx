import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    { icon: '📍', title: 'Expert Guidance', description: 'Benefit from our experts deep understanding of the real estate market for a smooth buying experience' },
    { icon: '✏️', title: 'Personalised Service', description: 'Our services adapt to your unique needs, ensuring a journey stress-free' },
    { icon: '📋', title: 'Transparent Process', description: 'Stay informed with our transparent approach to buying your home' },
    { icon: '💬', title: 'Exceptional Support', description: 'providing peace of mind and attentive customer service' }
  ];

  return (
    <section className="why-choose">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Elevating Your Home Buying Experience with Expertise, Integrity, and Unmatched Personalised Service
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
