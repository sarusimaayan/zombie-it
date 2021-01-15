import React from "react";
// import ReactDOM from "react-dom";
import '../styles.css';


const getTimeFormat = (minutes) => {
  let waitPeriod = `${minutes} mins`;
  if (minutes>=60){
    const hours = minutes/60;
    waitPeriod = `${hours.toFixed(1)} hrs`;
    if (hours>=24){
      const days = Math.floor(hours/24);
      waitPeriod = `${days.toFixed(1)} days`;
    }
  }
  return waitPeriod
}

const HospitalButton = ({name, waitTime}) => {
  const waitPeriod = getTimeFormat(waitTime);

  return(
    <div class="horizontal">
      <div class="item-name">
        <p>{name}</p>
      </div>
      <div class="waitTime">
        <span class="text">Wait time:</span>
        <span class="time">{waitPeriod}</span>
      </div>
    </div>
  );
}



export default HospitalButton;
