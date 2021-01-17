import React from "react";
import '../styles.css';
import { getTimeFormat } from "../utils/utils";


const HospitalButton = (props) => {
  return(
    <div class="button">
      <div class="item-name">
        <p>{props.name}</p>
      </div>
      <div class="waitTime">
        <span class="text">Wait time:</span>
        <span class="time">{getTimeFormat(props.waitTime)}</span>
      </div>
    </div>
  );
}

export default HospitalButton;
