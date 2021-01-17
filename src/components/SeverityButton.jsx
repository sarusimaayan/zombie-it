import React from "react";
// import ReactDOM from "react-dom";
import '../styles.css';
import Severity0 from '@material-ui/icons/SentimentSatisfied';
import Severity1 from '@material-ui/icons/SentimentDissatisfied';
import Severity2 from '@material-ui/icons/SentimentVeryDissatisfied';
import Severity3 from '@material-ui/icons/MoodBad';
import Severity4 from '@material-ui/icons/SentimentVeryDissatisfiedOutlined';



function chooseSeverity(event) {
  event.preventDefault();
}

function SeverityButton(props){
  function handleClick() {
    props.painLevel(props.level);
  }

  return(
    <div class="severity">
      <button onClick={handleClick}><Severity0
      style={{color: "DarkBlue", fontSize: "50px"}} /></button>

      <button onClick={handleClick}><Severity1
      style={{color: "ForestGreen", fontSize: "50px"}} /></button>

      <button onClick={handleClick}><Severity2
      style={{color: "Gold", fontSize: "50px"}} /></button>

      <button onClick={handleClick}><Severity3
      style={{color: "DarkOrange", fontSize: "50px"}} /></button>

      <button onClick={handleClick}><Severity4
      style={{color: "FireBrick", fontSize: "50px"}} /></button>
    </div>
  );
}

export default SeverityButton;
