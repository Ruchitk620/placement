import axios from "axios";
import React, { useState } from "react";
import { Fragment } from "react";
import { Button, Container, Form, FormGroup } from "reactstrap";

const AddCertificates = () => {
  const [certificate, setCertificate] = useState({});

  const handleForm = (e) => {
    console.log(certificate);
    postDataToServer(certificate);
    e.preventDefault();
  };

  const postDataToServer = (data) => {
    axios
      .post("http://localhost:8081/certificates", data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <h1>Enter Certificate</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="year">Year</label>
          <input
            type="text"
            placeholder="Year here"
            name="year"
            id="year"
            onChange={(e) => {
              setCertificate({ ...certificate, year: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="collegeId">College ID</label>
          <input
            type="text"
            placeholder="College ID here"
            name="collegeId"
            id="collegeId"
            onChange={(e) => {
              setCertificate({ ...certificate, collegeId: e.target.value });
            }}
          />
        </FormGroup>
        <Container>
          <Button type="submit">Add Certificate</Button>
          <Button
            type="reset"
            onClick={(e) => {
              setCertificate({});
            }}
          >
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddCertificates;
