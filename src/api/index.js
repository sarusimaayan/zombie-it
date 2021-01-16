import axios from "axios"

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const getIllnesses = () => api.get('/illnesses');
export const getHospitals = () => api.get('/hospitals');


const apis = {
    getIllnesses,
    getHospitals
}

export default apis;
