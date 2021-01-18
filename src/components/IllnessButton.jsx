import React from "react";
import '../styles.css';

const IllnessButton = (props) => {
  return(
    <div className="button" onClick={props.onClick}>
      <div className="item-name">
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default IllnessButton;
