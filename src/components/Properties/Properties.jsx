import { useState } from "react";
import './Properties.css';

const propertiesData = [
  {
    id: 1,
    city: 'San Francisco, California',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    rooms: 4,
    area: '3,500 sq ft',
    price: '$2,500,000',
  },
  {
    id: 2,
    city: 'Beverly Hills, California',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    rooms: 3,
    area: '1,500 sq ft',
    price: '$850,000',
  },
  {
    id: 3,
    city: 'Palo Alto, California',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    rooms: 6,
    area: '4,000 sq ft',
    price: '$3,700,000',
  },
  {
    id: 4,
    city: 'San Francisco, California',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    rooms: 4,
    area: '3,500 sq ft',
    price: '$2,500,000',
  },
  {
    id: 5,
    city: 'Beverly Hills, California',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    rooms: 3,
    area: '1,500 sq ft',
    price: '$850,000',
  },
  {
    id: 6,
    city: 'Palo Alto, California',
    image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80',
    rooms: 6,
    area: '4,000 sq ft',
    price: '$3,700,000',
  },
  {
    id: 7,
    city: 'San Francisco, California',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80',
    rooms: 4,
    area: '3,500 sq ft',
    price: '$2,500,000',
  },
  {
    id: 8,
    city: 'Beverly Hills, California',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    rooms: 3,
    area: '1,500 sq ft',
    price: '$850,000',
  },
  {
    id: 9,
    city: 'Palo Alto, California',
    image: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?w=800&q=80',
    rooms: 6,
    area: '4,000 sq ft',
    price: '$3,700,000',
  },
];

const Properties = () => {

  const [add, setAdd] = useState(propertiesData)

  const addRooms = (id) => {
    setAdd(roomIds =>
    (roomIds.map(item =>
      item.id === id ? { ...item, rooms: item.rooms + 1 } : item
    ))
    )
  }

  const reset = (id) => {
    setAdd(roomIds =>
      roomIds.map(item =>
        item.id === id ? { ...item, rooms: 0 } : item
      )
    )
  }

  return (
    <div className="properties-page">
      {/* Hero Section */}
      <section className="properties-hero">
        <div className="properties-hero-content">
          <div className="hero-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
              alt="Luxury Modern Home"
              className="hero-main-image"
            />
          </div>
        </div>
      </section>

      {/* Best Cities Section */}
      <section className="best-cities-section">
        <div className="container">
          <h2 className="section-title">The Best Cities</h2>
          <div className="properties-grid">
            {add.slice(0, 3).map((property) => (
              <div key={property.id} className="property-card">
                <div className="property-image-wrapper">
                  <img src={property.image} alt={property.city} className="property-image" />
                </div>
                <div className="property-info">
                  <div className="property-location">
                    <span className="location-icon">📍</span>
                    <span className="location-text">{property.city}</span>
                  </div>
                  <div className="property-details">
                    <div className="detail-item">
                      <span className="detail-icon">🛏️</span>
                      <span className="detail-text">{property.rooms} Rooms</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">📐</span>
                      <span className="detail-text">{property.area}</span>
                    </div>
                  </div>
                  <div className="property-footer">
                    <div className="property-actions">
                      <button className="btn-add-room" onClick={() => addRooms(property.id)}>Add Room</button>
                      <button className="btn-reset" onClick={() => reset(property.id)}>Reset</button>
                    </div>
                    <div className="property-price">{property.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* California Houses Section */}
      <section className="california-section">
        <div className="container">
          <h2 className="section-title">California houses</h2>
          <div className="properties-grid">
            {add.slice(3, 6).map((property) => (
              <div key={`ca-${property.id}`} className="property-card">
                <div className="property-image-wrapper">
                  <img src={property.image} alt={property.city} className="property-image" />
                </div>
                <div className="property-info">
                  <div className="property-location">
                    <span className="location-icon">📍</span>
                    <span className="location-text">{property.city}</span>
                  </div>
                  <div className="property-details">
                    <div className="detail-item">
                      <span className="detail-icon">🛏️</span>
                      <span className="detail-text">{property.rooms} Rooms</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">📐</span>
                      <span className="detail-text">{property.area}</span>
                    </div>
                  </div>
                  <div className="property-footer">
                    <div className="property-actions">
                      <button className="btn-add-room" onClick={() => addRooms(property.id)}>Add Room</button>
                      <button className="btn-reset" onClick={() => reset(property.id)}>Reset</button>
                    </div>
                    <div className="property-price">{property.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Miami Houses Section */}
      <section className="miami-section">
        <div className="container">
          <h2 className="section-title">Miami houses</h2>
          <div className="properties-grid">
            {add.slice(6, 9).map((property) => (
              <div key={`miami-${property.id}`} className="property-card">
                <div className="property-image-wrapper">
                  <img src={property.image} alt={property.city} className="property-image" />
                </div>
                <div className="property-info">
                  <div className="property-location">
                    <span className="location-icon">📍</span>
                    <span className="location-text">{property.city}</span>
                  </div>
                  <div className="property-details">
                    <div className="detail-item">
                      <span className="detail-icon">🛏️</span>
                      <span className="detail-text">{property.rooms} Rooms</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-icon">📐</span>
                      <span className="detail-text">{property.area}</span>
                    </div>
                  </div>
                  <div className="property-footer">
                    <div className="property-actions">
                      <button className="btn-add-room" onClick={() => addRooms(property.id)}>Add Room</button>
                      <button className="btn-reset" onClick={() => reset(property.id)}>Reset</button>
                    </div>
                    <div className="property-price">{property.price}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Properties;
