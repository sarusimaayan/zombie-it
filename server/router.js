const express = require('express');
const apiCtrl = require('./apiControl');
const router = express.Router();

router.get('/illnesses', apiCtrl.getIllnesses);
router.get('/hospitals', apiCtrl.getHospitals);
module.exports = router;
