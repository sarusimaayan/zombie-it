
//Convert time in minutes to hours and days
export const getTimeFormat = (minutes) => {
  let waitPeriod = `${minutes} mins`;
  if (minutes>=60){
    const hours = Math.floor(minutes/60);
    minutes %= 60;
    if (minutes > 0 && minutes < 10 ){
      waitPeriod = `${hours}:0${minutes} hrs`;
    }
    if (minutes >= 10){
      waitPeriod = `${hours}:${minutes} hrs`;
    }
    if (hours>=24){
      const days = hours/24;
      waitPeriod = `${days.toFixed(1)} days`;
    }
  }
  return waitPeriod
}
