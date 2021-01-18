import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getIllnesses = () => api.get('/illnesses');
export const getHospitals = () => api.get('/hospitals');
export const postDetails = (params) => api.post('/patientDetails', params);

const apis = {
  getIllnesses,
  getHospitals,
  postDetails,
};

export default apis;
