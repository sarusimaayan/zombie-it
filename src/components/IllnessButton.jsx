import React from "react";
import '../styles.css';

function IllnessButton(props){
  return(
    <div onClick={props.onClick}>
      <p className="button">{props.name}</p>
    </div>
  );
}

export default IllnessButton;
