import React, { useState } from "react";
import Heading from "../components/Heading";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import { useHistory } from "react-router-dom";

const LoginScreen = () => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const validateDetails = (name) => {
    return (firstName.length > 0 && lastName.length > 0);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/illnesses");
    //const submitData illnessName...
  }

  return (
    <div className="Login container">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="name">
        <Heading text = "Please enter patient's details" />
          <Form.Label><h5>First Name:</h5></Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Label><h5>Last Name:</h5></Form.Label>
          <Form.Control
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
        <Button color="primary" block size="lg" type="submit" disabled={!validateDetails()}>
          Continue
        </Button>
      </Form>
    </div>
  );
}

export default LoginScreen;
