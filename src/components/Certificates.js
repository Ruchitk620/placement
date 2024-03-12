import React, { Component } from "react";
import axios from "axios";
import { Button, Table } from "reactstrap";
import AddCertificate from "./AddCertificates"; // Import the AddCertificate component

class Certificates extends Component {
  state = {
    certificates: [],
    showAddCertificate: false // Add a state to track the visibility of the AddCertificate component
  };

  async componentDidMount() {
    try {
      const response = await axios.get("http://localhost:8081/certificates");
      this.setState({ certificates: response.data });
    } catch (error) {
      console.error("Error fetching certificates:", error);
    }
  }

  // Function to toggle the visibility of the AddCertificate component
  toggleAddCertificate = () => {
    this.setState({ showAddCertificate: !this.state.showAddCertificate });
  };

  // Function to handle navigation to a different page
  navigateTo = (path) => {
    this.props.history.push(path);
  };

  // Function to delete a certificate
  deleteCertificate = async (id) => {
    try {
      await axios.delete(`http://localhost:8081/certificates/${id}`);
      // Update the state to reflect the deleted certificate
      this.setState({
        certificates: this.state.certificates.filter(certificate => certificate.id !== id)
      });
    } catch (error) {
      console.error("Error deleting certificate:", error);
    }
  };

  render() {
    const { certificates, showAddCertificate } = this.state;
    return (
      <div>
        <h1>List of Certificates</h1>
        {/* Button to toggle the visibility of the AddCertificate component */}
        <Button onClick={this.toggleAddCertificate}>Add Certificate</Button>
        <Table striped bordered>
          <thead>
            <tr>
              <th>Year</th>
              <th>College ID</th>
              <th>Action</th> {/* Add a column for the action buttons */}
            </tr>
          </thead>
          <tbody>
            {certificates.map(certificate => (
              <tr key={certificate.id}>
                <td>{certificate.year}</td>
                <td>{certificate.collegeId}</td>
                <td>
                  {/* Add a delete button for each certificate */}
                  <Button color="danger" onClick={() => this.deleteCertificate(certificate.id)}>Delete</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* Render the AddCertificate component based on the state */}
        {showAddCertificate && <AddCertificate />}
      </div>
    );
  }
}

export default Certificates;
