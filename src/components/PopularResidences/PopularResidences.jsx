import React, { useEffect, useState } from 'react';
import './PopularResidences.css';

const PopularResidences = () => {

  const [data, database] = useState([]),
    [loading, setLoading] = useState(true),
    [error,setError]=useState(false)
  function fatch() {
    setLoading(true)
    fetch("https://698da84cb79d1c928ed612d8.mockapi.io/residences")
      .then(res => {
        return res.json()
      }).then(datas => {
        database(datas)
        setLoading(false)
      }).catch(err=>{
        setLoading(false)
        setError(true)
      })
  }
  useEffect(() => { fatch() }, [])
  return (
    <section className="popular-residences">
      <div className="container">
        <h2 className="section-title">Our Popular Residences</h2>
        <div className="filter-controls">
          <div className="bedroom-filters">
          </div>
        </div>
        <div className="residences-grid">
          {loading ? (
            <div className="loader-wrapper">
              <span className="loader"></span>
            </div>
          ) : error ?(
            <h1 className='error'>Something went wrong</h1>
          ) :(
          data.map((residence) => (
            <div key={residence.id} className="residence-card">
              <div className="residence-image">
                <img src={residence.image} alt={residence.title} />
                <button className="sign-up-badge">Sign up</button>
              </div>
              <div className="residence-info">
                <div className="residence-location">
                  📍 <span>{residence.location}</span>
                </div>
                <div className="residence-details">
                  <div className="detail-item">
                    🏠 <span>{residence.bedrooms} Rooms</span>
                  </div>
                  <div className="detail-item">
                    📐 <span>{Number(residence.area).toLocaleString()} sq ft</span>
                  </div>
                </div>
                <div className="residence-price">${Number(residence.price).toLocaleString()}</div>
              </div>
            </div>
          )))}
        </div>
      </div>
    </section>
  );
};

export default PopularResidences;
