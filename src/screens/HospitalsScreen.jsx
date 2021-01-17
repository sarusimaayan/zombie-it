import React, { useState, useEffect } from 'react';
import api from '../api';
import Heading from "../components/Heading";
import HospitalButton from "../components/HospitalButton";

export default function HospitalsScreen (props){
  console.log(props);
  const [hospitals, setHospitals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const prop = props.history.location;
  const painLevel = prop.state || "0";

  useEffect(function() {
    try{
      async function fetchHospitals(){
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

  const calcTotalProcessTime = (hospitalObject, painLevel) => {
    const hospitalWaitingList = hospitalObject.waitingList[painLevel];
    const totalProcessTime =
      hospitalWaitingList.averageProcessTime * hospitalWaitingList.patientCount;
    return totalProcessTime;
  }

  const hospitalsTotalProcessTimeArray = hospitals.map(function(hospitalObject, index){
    const totalProcessTime = calcTotalProcessTime(hospitalObject, painLevel);
    return {
      ...hospitalObject,
      totalProcessTime,
    }
  });

  const hospitalsTotalProcessTimeArraySorted =
    hospitalsTotalProcessTimeArray.sort(function (a, b){
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
        <div>
        <Heading text = "Our suggested hospitals:" />
          {hospitalsTotalProcessTimeArraySorted.map(function(hospitalObject, index){
            return(
              <HospitalButton
                name={hospitalObject.name}
                waitTime={hospitalObject.totalProcessTime}
              />
            )
          })}
        </div>
      )
    )
  );
}
