import Storage from './storageUtils';
import { PATIENT_DATA } from './constants';
import { postDetails } from '../api/apiUtils';

//Convert time in minutes to hours and days
export const getTimeFormat = (minutes) => {
  let waitPeriod = `${minutes} mins`;

  if (minutes>=60){
    const hours = Math.floor(minutes/60);
    minutes %= 60;
    if (minutes === 0){
      waitPeriod = `${hours} hrs`;
    }
    else if (minutes > 0 && minutes < 10 ){
      waitPeriod = `${hours}:0${minutes} hrs`;
    }
    else if (minutes >= 10){
      waitPeriod = `${hours}:${minutes} hrs`;
    }

    if (hours>=24){
      const days = hours/24;
      waitPeriod = `${days.toFixed(1)} days`;
    }
  }
  return waitPeriod
}

export const getPatientInfo = () => {
  return {
    firstName : Storage.get(PATIENT_DATA.FirstName),
    lastName : Storage.get(PATIENT_DATA.LastName),
    illnessObject : [
      {
        illnessId : Storage.get(PATIENT_DATA.IllnessId),
        illnessName : Storage.get(PATIENT_DATA.IllnessName),
        patientPainLevel : Storage.get(PATIENT_DATA.LevelOfPain)
      }
    ]
  };
}

export const savePatientInfoToDB = async () => {
  const data = getPatientInfo();
  return postDetails(data);
};
