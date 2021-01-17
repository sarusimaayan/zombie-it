import React, { useState, useEffect } from 'react';
import api from '../api';
import Heading from "../components/Heading";
import HospitalButton from "../components/HospitalButton";

const HospitalsScreen = (props) => {
  console.log(props);
  const [hospitals, setHospitals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const prop = props.history.location;
  const painLevel = prop.state || "0";

//Get the full hospitals array from the server
  useEffect(() => {
    try{
      const fetchHospitals = async() => {
        const hospitalsArray = await api.getHospitals();
        console.log(hospitalsArray.data);
        setHospitals(hospitalsArray.data)

        setIsLoading(false);
      }

      fetchHospitals();

    } catch (err) {
      setIsError(true);
    }
  }, []);


//Calculate the total waiting time (in minuts) for the selected level of pain
  const calcTotalProcessTime = (hospitalObject, painLevel) => {
    const hospitalWaitingList = hospitalObject.waitingList[painLevel];
    const totalProcessTime =
      hospitalWaitingList.averageProcessTime * hospitalWaitingList.patientCount;
    return totalProcessTime;
  }


//For each hospital, calculate the total waiting time and add it to the hospital object
  const hospitalsTotalProcessTimeArray = hospitals.map((hospitalObject, index) => {
    const totalProcessTime = calcTotalProcessTime(hospitalObject, painLevel);
    return {
      ...hospitalObject,
      totalProcessTime,
    }
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
      isLoading ? (
        <div>loading</div>
      ) : (
        <div className="container">
          <div className="inner-center">
            <Heading text = "Our suggested hospitals:" />
              {hospitalsTotalProcessTimeArraySorted.map((hospitalObject, index) => {
                return(
                  <HospitalButton
                    name={hospitalObject.name}
                    waitTime={hospitalObject.totalProcessTime}
                  />
                )
              })}
          </div>
        </div>
        
      )
    )
  );
}

export default HospitalsScreen;
