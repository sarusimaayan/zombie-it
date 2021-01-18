import React from "react";
import '../styles.css';
import Emojy0 from '@material-ui/icons/SentimentSatisfied';
import Emojy1 from '@material-ui/icons/SentimentDissatisfied';
import Emojy2 from '@material-ui/icons/SentimentVeryDissatisfied';
import Emojy3 from '@material-ui/icons/MoodBad';
import Emojy4 from '@material-ui/icons/SentimentVeryDissatisfiedOutlined';


const SeverityButton = (props) =>{

  const handleClick = (id) => {
    props.onClick(id);
  }

  return(
    <div className="severity">
      <button onClick={() => handleClick(0)}>
        <Emojy0 style={{color: "DarkBlue", fontSize: "50px"}} />
      </button>

      <button onClick={() => handleClick(1)}>
        <Emojy1 style={{color: "ForestGreen", fontSize: "50px"}} />
      </button>

      <button onClick={() => handleClick(2)}>
        <Emojy2 style={{color: "Gold", fontSize: "50px"}} />
      </button>

      <button onClick={() => handleClick(3)}>
        <Emojy3 style={{color: "DarkOrange", fontSize: "50px"}} />
      </button>

      <button onClick={() => handleClick(4)}>
        <Emojy4 style={{color: "FireBrick", fontSize: "50px"}} />
      </button>
    </div>
  );
}

export default SeverityButton;
