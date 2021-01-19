import React from 'react';
import Heading from '../components/Heading';
import SeverityButton from '../components/SeverityButton';
import { useHistory } from 'react-router-dom';
import Storage from '../utils/storageUtils';
import { savePatientInfoToDB } from '../utils/utils';
import { PATIENT_DATA } from '../utils/constants';
import PropTypes from 'prop-types';

const SeverityScreen = (props) => {
  const history = useHistory();
  const state = props.history.location.state;
  let illnessName = '';
  if (state){
    illnessName = state.name;
  }

  const handleClick = (levelOfPain) => {
    Storage.save(PATIENT_DATA.LevelOfPain, levelOfPain);
    // didn't awaited to avoid blocking the ui
    savePatientInfoToDB();
    history.push('/hospitals', levelOfPain);
  };

  return (
    <div className="container">
      <div className="inner-screen-container">
        <Heading text = "Select severity level:" />
        <h2>{illnessName}</h2>
        <SeverityButton
          onClick={(levelOfPain) => handleClick(levelOfPain)}
        />
      </div>
    </div>
  );
};

SeverityScreen.propTypes = {
  history: PropTypes.object,
};

export default SeverityScreen;
