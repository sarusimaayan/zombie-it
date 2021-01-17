import React from "react";
import '../styles.css';

function IllnessButton(props){
  return(
    <div className="button" onClick={props.onClick}>
      <h3>{props.name}</h3>
    </div>
  );
}

export default IllnessButton;
