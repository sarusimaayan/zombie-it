// server.db
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/patientsDB");
// {useNewUrlParser:true}

const patientSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  illnesses: [{
    illnessId: Number,
    illnessName: String,
    patientPainLevel: Number
  }]
});

// Create a mongoose model with our collection name in a singular form
// Mongoose will convert the singular to a plurelise form and create the collection
const Patient = mongoose.model("Patient", patientSchema);

const inserPatient = async (firstName, lastName, illnessObject) => {

  const patient = new Patient({
    firstName,
    lastName,
    illnesses : illnessObject,
  })

  return patient.save();
}

// Patient.updateOne({_id: "60042cf024a81a5c1cd9fa1c"}, {firstName:"updatedName"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Succesfully updated the document.");
//   }
// });
//
// Patient.deleteOne({firstName:"Maayan"}, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted the document.");
//   }
// });
//
// Patient.find(function(err, patients){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(patients);
//   }
// });

module.exports = {
  inserPatient,
}
