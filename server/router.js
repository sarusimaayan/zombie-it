const express = require('express');
const apiCtrl = require('./apiControl');
const router = express.Router();

router.get('/illnesses', apiCtrl.getIllnesses);
router.get('/hospitals', apiCtrl.getHospitals);
router.post('/patientDetails', apiCtrl.postPatientDetails);

module.exports = router;
