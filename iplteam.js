import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'; // For icons (trophy, person, location)

const iplTeams = [
  {"team":"Chennai Super Kings","trophies":5,"captain":"MS Dhoni","homeGround":"MA Chidambaram Stadium, Chennai","logo":"https://upload.wikimedia.org/wikipedia/en/2/2b/Chennai_Super_Kings_Logo.svg"},
  {"team":"Mumbai Indians","trophies":5,"captain":"Hardik Pandya","homeGround":"Wankhede Stadium, Mumbai","logo":"https://upload.wikimedia.org/wikipedia/en/c/cd/Mumbai_Indians_Logo.svg"},
  {"team":"Kolkata Knight Riders","trophies":2,"captain":"Shreyas Iyer","homeGround":"Eden Gardens, Kolkata","logo":"https://upload.wikimedia.org/wikipedia/en/4/4c/Kolkata_Knight_Riders_Logo.svg"},
  {"team":"Royal Challengers Bengaluru","trophies":0,"captain":"Faf du Plessis","homeGround":"M Chinnaswamy Stadium, Bengaluru","logo":"https://upload.wikimedia.org/wikipedia/en/d/d4/Royal_Challengers_Bangalore_Logo.svg"},
  {"team":"Rajasthan Royals","trophies":1,"captain":"Sanju Samson","homeGround":"Sawai Mansingh Stadium, Jaipur","logo":"https://upload.wikimedia.org/wikipedia/en/6/60/Rajasthan_Royals_Logo.svg"},
  {"team":"Sunrisers Hyderabad","trophies":1,"captain":"Pat Cummins","homeGround":"Rajiv Gandhi International Stadium, Hyderabad","logo":"https://upload.wikimedia.org/wikipedia/en/8/81/Sunrisers_Hyderabad.svg"},
  {"team":"Delhi Capitals","trophies":0,"captain":"Rishabh Pant","homeGround":"Arun Jaitley Stadium, Delhi","logo":"https://upload.wikimedia.org/wikipedia/en/2/2f/Delhi_Capitals.svg"},
  {"team":"Punjab Kings","trophies":0,"captain":"Shikhar Dhawan","homeGround":"IS Bindra Stadium, Mohali","logo":"https://upload.wikimedia.org/wikipedia/en/d/d4/Punjab_Kings_Logo.svg"},
  {"team":"Lucknow Super Giants","trophies":0,"captain":"KL Rahul","homeGround":"BRSABV Ekana Cricket Stadium, Lucknow","logo":"https://upload.wikimedia.org/wikipedia/en/5/5d/Lucknow_Super_Giants_logo.svg"},
  {"team":"Gujarat Titans","trophies":1,"captain":"Shubman Gill","homeGround":"Narendra Modi Stadium, Ahmedabad","logo":"https://upload.wikimedia.org/wikipedia/en/0/09/Gujarat_Titans_Logo.svg"}
];

// Class Component for Individual Team Card
class IPLTeamCard extends React.Component {
  render() {
    const { team, trophies, captain, homeGround, logo } = this.props.team;

    const borderStyle = trophies >= 5 
      ? 'border-warning border-4 shadow-warning' 
      : trophies > 0 
      ? 'border-success border-3' 
      : 'border-secondary border-2';

    const footerBg = trophies >= 5 ? 'bg-warning text-dark' 
      : trophies > 0 ? 'bg-success text-white' 
      : 'bg-secondary text-white';

    const footerText = trophies >= 5 ? '🏆🏆🏆🏆🏆 MOST SUCCESSFUL' 
      : trophies > 0 ? '🏆 IPL WINNER' 
      : 'Yet to Win IPL';

    return (
      <div className={`card h-100 bg-dark text-white shadow-lg ${borderStyle} overflow-hidden`}>
        <div className="card-body text-center p-4">
          <img
            src={logo}
            alt={`${team} logo`}
            className="img-fluid mb-4"
            style={{ height: '130px', objectFit: 'contain' }}
          />
          <h5 className="card-title fw-bold fs-4 mb-3">{team}</h5>

          <div>
            <p className="mb-3 fs-5">
              <i className="bi bi-trophy-fill text-warning me-2"></i>
              <strong>{trophies}</strong> IPL Title{trophies !== 1 ? 's' : ''}
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
          <h1 className="display-4 fw-bold mb-3">Indian Premier League 2025</h1>
          <p className="lead opacity-75">All 10 Teams • Champions • Captains • Home Grounds</p>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {iplTeams.map((team, index) => (
            <div className="col" key={index}>
              <IPLTeamCard team={team} />
            </div>
          ))}
        </div>

        <div className="text-center text-white mt-5">
          <small className="opacity-50">Data as of December 2025</small>
        </div>
      </div>

      {/* Optional Hover Effect CSS */}
      <style jsx>{`
        .card {
          transition: all 0.4s ease;
        }
        .card:hover {
          transform: translateY(-12px);
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6) !important;
        }
        .shadow-warning {
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.5);
        }
      `}</style>
    </div>
  );
}

export default App;