import React, { useState } from "react";
import Heading from "../components/Heading";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles.css';
import { useHistory } from "react-router-dom";

export default function LoginScreen() {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  function validateDetails(name) {
    return (firstName.length > 0 && lastName.length > 0);
  }

  function handleSubmit(event) {
    event.preventDefault();
    history.push("/illnesses");
    //const submitData illnessName...
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="name">
        <Heading text = "Please enter patient's details:" />
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Label>Last Name</Form.Label>
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
