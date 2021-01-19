import React from 'react';
import '../styles.css';
import { getTimeFormat } from '../utils/utils';
import PropTypes from 'prop-types';


const HospitalButton = (props) => {
  return(
    <div className="button">
      <div className="button-item-name">
        <p>{props.name}</p>
      </div>
      <div className="button-wait-time">
        <span className="text">Wait time:</span>
        <span className="time">{getTimeFormat(props.waitTime)}</span>
      </div>
    </div>
  );
};

HospitalButton.propTypes = {
  name: PropTypes.string,
  waitTime: PropTypes.string,
};

export default HospitalButton;
