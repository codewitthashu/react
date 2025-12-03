import React from 'react';
import ReactDOM from 'react-dom/client';
import './matrix.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
//functional component -> which returns JSX 

function DigitalClock() {
  //create date type object
  let today = new Date();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let seconds = today.getSeconds();

  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  let todayName = days[today.getDay()];
  let date = today.getDate();
  let month = today.getMonth() + 1; // Months are zero-indexed
  let year = today.getFullYear();

  let ampm;
  if (hour > 12)
    ampm = "PM";
  else
    ampm = "AM";

  let Clock = (<>
    <canvas id="matrix" />
    <div className="clock-container">
      <div>
        <div className="matrix-clock" id="clock">
          {hour}:{minute}:{seconds} {ampm}
        </div>
        <div className="date-text" id="date">
          {todayName}  {date}/{month}/{year}
        </div>
      </div>
    </div>
  </>)
  root.render(Clock);
}
setInterval(DigitalClock, 1000);