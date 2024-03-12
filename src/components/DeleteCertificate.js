import axios from "axios";
import React, { useState } from "react";
import { Fragment } from "react";
import { Button, Container, Form, FormGroup } from "reactstrap";

const DeleteCertificate = () => {
  const [certificateId, setCertificateId] = useState("");

  const handleForm = (e) => {
    console.log(certificateId);
    deleteDataFromServer(certificateId);
    e.preventDefault();
  };

  const deleteDataFromServer = (id) => {
    axios
      .delete(`http://localhost:8081/certificates/${id}`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <h1>Delete Certificate</h1>
      <Form onSubmit={handleForm}>
        <FormGroup>
          <label htmlFor="certificateId">Certificate ID</label>
          <input
            type="text"
            placeholder="Enter Certificate ID to delete"
            name="certificateId"
            id="certificateId"
            value={certificateId}
            onChange={(e) => {
              setCertificateId(e.target.value);
            }}
          />
        </FormGroup>
        <Container>
          <Button type="submit">Delete Certificate</Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default DeleteCertificate;
