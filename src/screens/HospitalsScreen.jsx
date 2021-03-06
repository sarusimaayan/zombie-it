import React, { useState, useEffect } from 'react';
import api from '../api/apiUtils';
import Heading from '../components/Heading';
import HospitalButton from '../components/HospitalButton';
import PropTypes from 'prop-types';


const HospitalsScreen = (props) => {
  const [hospitals, setHospitals] = useState([]);
  const [isError, setIsError] = useState(false);
  const prop = props.history.location;
  const painLevel = prop.state || '0';


  //Get the full hospitals array from the server
  useEffect(() => {
    try {
      const fetchHospitals = async() => {
        const hospitalsArray = await api.getHospitals();
        setHospitals(hospitalsArray.data);
      };
      fetchHospitals();

    } catch (err) {
      setIsError(true);
    }
  }, []);


  //Calculate the total waiting time (in minuts) for the selected level of pain
  const calcTotalProcessTime = (hospitalObject, painLevel) => {
    const hospitalWaitingObject = hospitalObject.waitingList.find(waitItem => waitItem.levelOfPain == painLevel);
    const totalProcessTime =
      hospitalWaitingObject.averageProcessTime * hospitalWaitingObject.patientCount;
    return totalProcessTime;
  };

  //For each hospital, calculate the total waiting time and add it to the hospital object
  const hospitalsTotalProcessTimeArray = hospitals.map((hospitalObject) => {
    const totalProcessTime = calcTotalProcessTime(hospitalObject, painLevel);
    return {
      ...hospitalObject,
      totalProcessTime,
    };
  });

  //Sort the hospitals by waiting time (Shortest to longest)
  const hospitalsTotalProcessTimeArraySorted =
    hospitalsTotalProcessTimeArray.sort( (a, b) => {
      return a.totalProcessTime -b.totalProcessTime;
    });


  return (
    isError ? (
      <div>error</div>
    )
      : (
        <div className="container">
          <div className="inner-screen-container">
            <Heading text = "Our suggested hospitals:" />
            {hospitalsTotalProcessTimeArraySorted.map((hospitalObject) => {
              return(
                <HospitalButton
                  key={hospitalObject.id}
                  name={hospitalObject.name}
                  waitTime={hospitalObject.totalProcessTime}
                />
              );
            })}
          </div>
        </div>

      )
  );
};

HospitalsScreen.propTypes = {
  history: PropTypes.object,
};

export default HospitalsScreen;
