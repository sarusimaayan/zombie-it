const axios = require("axios");

const illnessesUrl = "http://dmmw-api.australiaeast.cloudapp.azure.com:8080/illnesses";
const hospitalsUrl = "http://dmmw-api.australiaeast.cloudapp.azure.com:8080/hospitals";


const getIllnesses = async (req, res) => {
  axios.get(illnessesUrl)
    .then((response) => {
      const illnessesData = response.data;
      const illnessesArray = illnessesData._embedded.illnesses;
      const illnessesMap = illnessesArray.map(x => x.illness);
      return res.status(200).json(illnessesMap);
    });
}


const getHospitals = async (req, res) => {
  axios.get(hospitalsUrl)
    .then((response) => {
      const hospitalsData = response.data;
      return res.status(200).json(hospitalsData._embedded.hospitals);
    });
}

module.exports = {
    getIllnesses,
    getHospitals
}
