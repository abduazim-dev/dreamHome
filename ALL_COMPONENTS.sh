#!/bin/bash

# HelpSection
cat > src/components/HelpSection/HelpSection.jsx << 'EOF'
import React from 'react';
import './HelpSection.css';

const HelpSection = () => {
  return (
    <section className="help-section">
      <div className="container">
        <div className="help-grid">
          <div className="help-image">
            <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80" alt="Home"/>
          </div>
          <div className="help-content">
            <h2 className="help-title">We Help You To Find Your Dream Home</h2>
            <p className="help-description">
              From cozy cottages to luxurious estates, our dedicated team guides you through every step of the journey, ensuring your dream home becomes a reality
            </p>
            <div className="stats-grid">
              <div className="stat-item">
                <h3 className="stat-number">8K+</h3>
                <p className="stat-label">Houses Available</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">6K+</h3>
                <p className="stat-label">Houses Sold</p>
              </div>
              <div className="stat-item">
                <h3 className="stat-number">2K+</h3>
                <p className="stat-label">Trusted Agents</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HelpSection;
EOF

cat > src/components/HelpSection/HelpSection.css << 'EOF'
.help-section {
  padding: 6rem 0;
  background: white;
}

.help-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.help-image {
  border-radius: 20px;
  overflow: hidden;
}

.help-image img {
  width: 100%;
  height: auto;
}

.help-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1.5rem;
}

.help-description {
  font-size: 1rem;
  color: #666;
  line-height: 1.7;
  margin-bottom: 3rem;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 0.3rem;
}

.stat-label {
  font-size: 0.9rem;
  color: #666;
}

@media (max-width: 968px) {
  .help-grid {
    grid-template-columns: 1fr;
  }
}
EOF

# WhyChooseUs
cat > src/components/WhyChooseUs/WhyChooseUs.jsx << 'EOF'
import React from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const features = [
    { icon: '📍', title: 'Expert Guidance', description: 'Benefit from our expert's deep understanding of the real estate market for a smooth buying experience' },
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
EOF

cat > src/components/WhyChooseUs/WhyChooseUs.css << 'EOF'
.why-choose {
  padding: 6rem 0;
  background: #FAFAFA;
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.feature-card {
  background: #E8D5C4;
  padding: 2.5rem 2rem;
  border-radius: 16px;
  transition: transform 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.feature-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
  background: white;
  width: 70px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
}

.feature-title {
  font-size: 1.3rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
}

.feature-description {
  font-size: 0.95rem;
  color: #4a4a4a;
  line-height: 1.6;
}

@media (max-width: 1024px) {
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
EOF

echo "✓ All basic components created"
