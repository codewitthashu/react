import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // Icons for trophy, captain, stadium

const footballClubs = [
  {"club":"Real Madrid","trophies":15,"captain":"Dani Carvajal","homeGround":"Santiago Bernabéu Stadium","logo":"https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg"},
  {"club":"FC Barcelona","trophies":5,"captain":"Marc-André ter Stegen","homeGround":"Spotify Camp Nou","logo":"https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg"},
  {"club":"Manchester United","trophies":3,"captain":"Bruno Fernandes","homeGround":"Old Trafford","logo":"https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg"},
  {"club":"Liverpool","trophies":6,"captain":"Virgil van Dijk","homeGround":"Anfield","logo":"https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg"},
  {"club":"Bayern Munich","trophies":6,"captain":"Manuel Neuer","homeGround":"Allianz Arena","logo":"https://upload.wikimedia.org/wikipedia/en/1/1f/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg"},
  {"club":"AC Milan","trophies":7,"captain":"Mike Maignan","homeGround":"San Siro","logo":"https://upload.wikimedia.org/wikipedia/en/d/d0/AC_Milan.svg"},
  {"club":"Chelsea","trophies":2,"captain":"Reece James","homeGround":"Stamford Bridge","logo":"https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"},
  {"club":"Manchester City","trophies":1,"captain":"Bernardo Silva","homeGround":"Etihad Stadium","logo":"https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg"},
  {"club":"Juventus","trophies":2,"captain":"Manuel Locatelli","homeGround":"Allianz Stadium","logo":"https://upload.wikimedia.org/wikipedia/en/d/da/Juventus_FC_2017_logo.svg"},
  {"club":"Paris Saint-Germain","trophies":1,"captain":"Marquinhos","homeGround":"Parc des Princes","logo":"https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg"}
];

// Class Component for Individual Club Card
class FootballClubCard extends React.Component {
  render() {
    const { club, trophies, captain, homeGround, logo } = this.props.club;

    const borderStyle = trophies >= 10 
      ? 'border-warning border-4 shadow-warning' 
      : trophies >= 5 
      ? 'border-success border-3' 
      : trophies > 0 
      ? 'border-info border-3' 
      : 'border-secondary border-2';

    const footerBg = trophies >= 10 ? 'bg-warning text-dark' 
      : trophies >= 5 ? 'bg-success text-white' 
      : trophies > 0 ? 'bg-info text-white' 
      : 'bg-secondary text-white';

    const footerText = trophies >= 10 ? '🏆🏆🏆 RECORD WINNERS' 
      : trophies >= 5 ? '🏆 MULTIPLE UCL WINNERS' 
      : trophies > 0 ? '🏆 UCL WINNER' 
      : 'Yet to Win UCL';

    return (
      <div className={`card h-100 bg-dark text-white shadow-lg ${borderStyle} overflow-hidden transition-all hover-shadow-lg hover-translate-y`}>
        <div className="card-body text-center p-4">
          <img
            src={logo}
            alt={`${club} logo`}
            className="img-fluid mb-4"
            style={{ height: '130px', objectFit: 'contain' }}
          />
          <h5 className="card-title fw-bold fs-4 mb-3">{club}</h5>

          <div>
            <p className="mb-3 fs-5">
              <i className="bi bi-trophy-fill text-warning me-2"></i>
              <strong>{trophies}</strong> UCL Title{trophies !== 1 ? 's' : ''}
            </p>
            <p className="mb-2">
              <i className="bi bi-person-fill me-2"></i>
              <strong>Captain:</strong> {captain}
            </p>
            <p className="small opacity-75 mb-0">
              <i className="bi bi-geo-alt-fill me-2"></i>
              {homeGround}
            </p>
          </div>
        </div>

        <div className={`card-footer ${footerBg} text-center py-3 fw-bold`}>
          {footerText}
        </div>
      </div>
    );
  }
}

// Main App - Function Component
function App() {
  return (
    <div className="min-vh-100" style={{ background: 'linear-gradient(to bottom, #0f172a, #1e293b)' }}>
      <div className="container py-5">
        <div className="text-center text-white mb-5">
          <h1 className="display-4 fw-bold mb-3">UEFA Champions League</h1>
          <p className="lead opacity-75">Most Successful Clubs • Titles • Captains • Home Grounds (as of Dec 2025)</p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {footballClubs.map((club, index) => (
            <div className="col" key={index}>
              <FootballClubCard club={club} />
            </div>
          ))}
        </div>

        <div className="text-center text-white mt-5">
          <small className="opacity-50">Data updated December 31, 2025</small>
        </div>
      </div>

      {/* Hover Effects */}
      <style jsx>{`
        .transition-all {
          transition: all 0.4s ease;
        }
        .hover-shadow-lg:hover {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6) !important;
        }
        .hover-translate-y:hover {
          transform: translateY(-12px);
        }
        .shadow-warning {
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.6);
        }
      `}</style>
    </div>
  );
}

export default App;