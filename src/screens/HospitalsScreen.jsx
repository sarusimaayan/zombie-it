import React, { useState, useEffect } from 'react';
import api from '../api';
import Heading from "../components/Heading";
import HospitalButton from "../components/HospitalButton";


const calcTotalProcessTime = (hospitalObject, painLevel) => {
  const hospitalWaitingList = hospitalObject.waitingList[painLevel];
  const totalProcessTime =
  hospitalWaitingList.averageProcessTime *
  hospitalWaitingList.patientCount;
  return totalProcessTime;
}

export default function HospitalsScreen (props){
  console.log(props);
  const [hospitals, setHospitals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const prop = props.history.location;
  let painLevel = "0";
  if (prop){
    painLevel = prop.state;
  }

  useEffect(function() {
    try{
      async function fetchHospitals(){
        const hospitalsArray = await api.getHospitals();
        console.log(hospitalsArray.data);
        setHospitals(hospitalsArray.data)
            // painLevel:
        setIsLoading(false);
      }

      fetchHospitals();

    } catch (err) {
      setIsError(true);
    }
  }, []);

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
            {hospitals.map(function(hospitalObject, index){
              const totalProcessTime = calcTotalProcessTime(hospitalObject, painLevel);
              console.log(totalProcessTime);
              return(
                <HospitalButton
                name={hospitalObject.name}
                waitTime={totalProcessTime}
                />
              )
            })}
          </div>
        )
        // waitTime={this.calcTotalProcessTime.bind(this, hospitalObject, painLevel)}

      )
    );

}
