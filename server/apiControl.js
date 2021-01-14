// const express = require("express");
const http = require("http");
// const bodyParser = require("body-parser");
// const app = express();

const illnessesUrl = "http://dmmw-api.australiaeast.cloudapp.azure.com:8080/illnesses";
const hospitalsUrl = "http://dmmw-api.australiaeast.cloudapp.azure.com:8080/hospitals";



const getIllnesses = async (req, res) => {
  http.get(illnessesUrl, (response)=>{
    // if (response.statusCode === "400")
    response.on("data", (data)=>{
      const illnessesData = JSON.parse(data);
      const illnessesArray = illnessesData._embedded.illnesses;

      // const illnessesDict = illnessesArray.reduce((a,x) => ({...a, [x.illness.name]: x.illness.id}), {})
      const illnessesMap = illnessesArray.map(x => x.illness);
      console.log(illnessesMap);
    })
  })
  return res.status(200).json({ success: true, data: 'illness0' })
}// .catch(err => console.log(err))


const getHospitals = async (req, res) => {
  http.get(hospitalsUrl, (response)=>{
    // if (response.statusCode === "400")
    response.on("data", (data)=>{
      const hospitalsData = JSON.parse(data);
      const hospitalsArray = hospitalsData._embedded.hospitals;

      // const hospitalsMap = hospitalsArray.map(x => x.illness);
      console.log(hospitalsArray);
    })
  })
  return res.status(200).json({ success: true, data: 'hospitals0' })
}// .catch(err => console.log(err))

module.exports = {
    getIllnesses,
    getHospitals
}
