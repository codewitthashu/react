import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// HotelCard Component
class HotelCard extends React.Component {
  renderStars = () => {
    const { rating } = this.props;
    const fullStars = Math.floor(rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill={i < fullStars ? '#FFD700' : '#e9ecef'}
          viewBox="0 0 16 16"
          className="me-1"
        >
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
      );
    }
    return stars;
  };

  render() {
    const {
      imageUrl,
      title,
      subtitle,
      location,
      price,
      rating,
      showBestPriceBadge = false
    } = this.props;

    return (
      <div className="card hotel-card border-0 shadow rounded-4 overflow-hidden" style={{ width: '320px' }}>
        <div className="position-relative">
          <img
            src={imageUrl}
            className="card-img-top"
            alt={title}
            style={{ height: '200px', objectFit: 'cover' }}
          />

          {/* Rating Badge */}
          <div className="position-absolute bottom-0 end-0 bg-dark bg-opacity-75 text-white px-3 py-2 rounded-start" style={{ fontWeight: 'bold', fontSize: '15px' }}>
            {rating.toFixed(1)} <small className="text-white-50">/5</small>
          </div>

          {/* Best Price Badge (Optional) */}
          {showBestPriceBadge && (
            <span className="position-absolute top-0 start-0 bg-danger text-white px-3 py-1" style={{ fontSize: '12px', fontWeight: 'bold' }}>
              Best Price
            </span>
          )}
        </div>

        <div className="card-body p-3">
          <h5 className="mb-1 fw-bold text-dark" style={{ fontSize: '17px' }}>
            {title}
          </h5>
          <p className="text-muted mb-2" style={{ fontSize: '13px' }}>
            {subtitle}
          </p>

          {/* Location */}
          <div className="d-flex align-items-center text-secondary mb-2" style={{ fontSize: '13px' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="#666" className="me-1" viewBox="0 0 16 16">
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
            </svg>
            {location}
          </div>

          {/* Star Rating */}
          <div className="mb-3">
            {this.renderStars()}
            <small className="text-muted ms-1">({rating.toFixed(1)})</small>
          </div>

          {/* Price */}
          <div className="d-flex align-items-baseline">
            <h4 className="mb-0 fw-bold text-dark">₹{price.toLocaleString('en-IN')}</h4>
            <span className="text-muted ms-2" style={{ fontSize: '13px' }}>per night</span>
          </div>
        </div>
      </div>
    );
  }
}

// Main App Component
class App extends React.Component {
  render() {
    const hotels = [
      {
        imageUrl: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500",
        title: "Luxury Beach Villa",
        subtitle: "5-star beachfront resort",
        location: "Maldives",
        price: 15000,
        rating: 4.8,
        showBestPriceBadge: true
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500",
        title: "Mountain Resort",
        subtitle: "Premium hill station hotel",
        location: "Shimla",
        price: 8500,
        rating: 4.5,
        showBestPriceBadge: false
      },
      {
        imageUrl: "https://images.unsplash.com/photo-1559329007-40790c9fdf4d?w=500",
        title: "City Business Hotel",
        subtitle: "Modern city center hotel",
        location: "Mumbai",
        price: 5000,
        rating: 4.2,
        showBestPriceBadge: false
      }
    ];

    return (
      <div className="bg-light py-5" style={{ minHeight: "100vh" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 20px" }}>
          <h1 className="text-center mb-5 fw-bold text-primary">Available Hotels</h1>
          <div className="row g-4 justify-content-center">
            {hotels.map((hotel, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <HotelCard
                  imageUrl={hotel.imageUrl}
                  title={hotel.title}
                  subtitle={hotel.subtitle}
                  location={hotel.location}
                  price={hotel.price}
                  rating={hotel.rating}
                  showBestPriceBadge={hotel.showBestPriceBadge}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;