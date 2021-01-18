import React from 'react';
import '../styles.css';
import { getTimeFormat } from '../utils/utils';


const HospitalButton = (props) => {
  return(
    <div className="button">
      <div className="button-item-name">
        <p>{props.name}</p>
      </div>
      <div className="button-waitTime">
        <span className="text">Wait time:</span>
        <span className="time">{getTimeFormat(props.waitTime)}</span>
      </div>
    </div>
  );
};

export default HospitalButton;
