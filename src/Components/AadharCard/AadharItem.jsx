import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { deleteAadharCard } from "../../Actions/aadharCardActions";

class AadharItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClick = this.onClick.bind(this, props.aadhar_card.id);
  }
  onClick(pt_id) {
    this.props.deleteAadharCard(pt_id);
  }
  render() {
    const { aadhar_card } = this.props;
    let s = "/updateAadharCard/" + aadhar_card.id;
    return (
      <React.Fragment>
        <Card className="bg-warning">
          <CardHeader className="text-dark bg-info text-center">
            ID:{aadhar_card.id}&nbsp;&nbsp;&nbsp;&nbsp;{aadhar_card.firstName}
            &nbsp;&nbsp;{aadhar_card.lastName}
          </CardHeader>
          <CardBody className="bg-success">
            <CardTitle className="text-warning">
              {" "}
              <strong>
                {" "}
                <pre className="text-center">
                  {aadhar_card.firstName} Details
                </pre>
              </strong>
            </CardTitle>
            <CardSubtitle>
              <pre>
                <h6>
                  <strong>Email :</strong> {aadhar_card.email}
                </h6>
                <h6>
                  <strong>Phone Number:</strong>
                  {aadhar_card.phoneNumber}
                </h6>
                <h6>
                  <strong>First Name:</strong>
                  {aadhar_card.firstName}
                </h6>
                <h6>
                  <strong>Last Name:</strong>
                  {aadhar_card.lastName}
                </h6>
                <h6>
                  <strong>Aadhar Number:</strong>
                  {aadhar_card.aadharNumber}
                </h6>
                <h6>
                  <strong>AddressLine1: </strong>
                  {aadhar_card.address.addressLine1}
                </h6>
                <h6>
                  <strong>City :</strong>
                  {aadhar_card.address.city}
                </h6>
                <h6>
                  <strong>Country: </strong>
                  {aadhar_card.address.country}
                </h6>
                <h6>
                  <strong>State : </strong>
                  {aadhar_card.address.state}
                </h6>
                <h6>
                  <strong>PostCode : </strong>
                  {aadhar_card.address.postCode}
                </h6>
                <h6>
                  <strong>AddressLine2 : </strong>{" "}
                  {aadhar_card.address.addressLine2}
                </h6>
              </pre>
            </CardSubtitle>
          </CardBody>
          <CardFooter className="bg-info">
            <Button
              color="warning"
              tag="a"
              href={s}
              className="float-left btn-sm "
            >
              Update
            </Button>
            <Button
              color="danger"
              onClick={this.onClick}
              className="float-right btn-sm"
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      </React.Fragment>
    );
  }
}

AadharItem.propTypes = {
  deleteAadharCard: PropTypes.func.isRequired
};
export default connect(
  null,
  { deleteAadharCard }
)(AadharItem);
