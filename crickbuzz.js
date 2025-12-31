import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // ← This gives you all Bootstrap styles

class BatsmanScoreboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      batsmen: [
        { name: 'Ben Duckett', dismissal: 'c Smith b Hazlewood', runs: 45, balls: 78, fours: 6, sixes: 0, sr: '57.69', notOut: false },
        { name: 'Zak Crawley', dismissal: 'b Starc', runs: 32, balls: 45, fours: 5, sixes: 0, sr: '71.11', notOut: false },
        { name: 'Ollie Pope', dismissal: 'c Carey b Cummins', runs: 68, balls: 112, fours: 8, sixes: 1, sr: '60.71', notOut: false },
        { name: 'Joe Root', dismissal: 'lbw b Lyon', runs: 15, balls: 28, fours: 2, sixes: 0, sr: '53.57', notOut: false },
        { name: 'Harry Brook', dismissal: 'c Hazlewood b Cummins', runs: 41, balls: 65, fours: 5, sixes: 1, sr: '63.08', notOut: false },
        { name: 'Ben Stokes (c)', dismissal: 'not out', runs: 25, balls: 40, fours: 3, sixes: 0, sr: '62.50', notOut: true },
        { name: 'Jamie Smith †', dismissal: 'not out', runs: 10, balls: 15, fours: 1, sixes: 0, sr: '66.67', notOut: true },
      ]
    };
  }

  render() {
    return (
      <div className="container my-5">
        <div className="card shadow">
          <div className="card-header bg-primary text-white text-center">
            <h3 className="mb-0">
              England 2nd Innings Batting Scoreboard
            </h3>
            <small className="d-block mt-1">(The Ashes 2025-26, 2nd Test)</small>
          </div>
          <div className="card-body p-0">
            <div className="table-responsive">
              <table className="table table-striped table-hover mb-0">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>Batsman</th>
                    <th>Dismissal</th>
                    <th>Runs</th>
                    <th>Balls</th>
                    <th>4s</th>
                    <th>6s</th>
                    <th>SR</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.batsmen.map((batsman, index) => (
                    <tr key={index}>
                      <td><strong>{batsman.name}</strong></td>
                      <td>
                        <span className={batsman.notOut ? 'text-success fw-bold' : ''}>
                          {batsman.dismissal}
                        </span>
                      </td>
                      <td><strong>{batsman.runs}</strong></td>
                      <td>{batsman.balls}</td>
                      <td>{batsman.fours}</td>
                      <td>{batsman.sixes}</td>
                      <td>{batsman.sr}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="card-footer text-center bg-light">
            <h4 className="mb-0"><strong>Total: 241</strong></h4>
          </div>
        </div>
      </div>
    );
  }
}

export default BatsmanScoreboard;