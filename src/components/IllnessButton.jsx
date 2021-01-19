import React from 'react';
import '../styles.css';
import PropTypes from 'prop-types';


const IllnessButton = (props) => {
  return(
    <div className="button" onClick={props.onClick}>
      <div className="button-item-name">
        <p>{props.name}</p>
      </div>
    </div>
  );
};

IllnessButton.propTypes = {
  onClick: PropTypes.func,
  name: PropTypes.string,
};

export default IllnessButton;
