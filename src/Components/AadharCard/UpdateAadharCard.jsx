import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Button,
  Container,
  Badge
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addAadharCard,
  getAadharCardByID
} from "../../Actions/aadharCardActions";

class UpdateAadharCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      aadharNumber: "",
      address: {
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        country: "",
        longitude: "",
        latitude: "",
        type: "",
        postCode: ""
      }
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const aadhar = {
      id: this.state.id,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phoneNumber: this.state.phoneNumber,
      email: this.state.email,
      aadharNumber: this.state.aadharNumber,
      address: {
        addressLine1: this.state.addressLine1,
        addressLine2: this.state.addressLine2,
        city: this.state.city,
        state: this.state.state,
        country: this.state.country,
        longitude: this.state.longitude,
        latitude: this.state.latitude,
        type: this.state.type,
        postCode: this.state.postCode
      }
    };
    this.props.addAadharCard(aadhar, this.props.history);
  }

  componentDidMount() {
    const { pt_id } = this.props.match.params;
    this.props.getAadharCardByID(pt_id);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        error: nextProps.error
      });
    }
    const {
      id,
      firstName,
      lastName,
      phoneNumber,
      email,
      aadharNumber
    } = nextProps.aadhar_card;
    const {
      addressLine1,
      addressLine2,
      city,
      state,
      country,
      longitude,
      latitude,
      type,
      postCode
    } = nextProps.aadhar_card.address;
    this.setState({
      id,
      firstName,
      lastName,
      phoneNumber,
      email,
      aadharNumber
    });
    this.setState({
      addressLine1,
      addressLine2,
      city,
      state,
      country,
      longitude,
      latitude,
      type,
      postCode
    });
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col sm="3">
              <Button color="primary" tag="a" href="/">
                Home Page
              </Button>
            </Col>
          </Row>

          <Row>
            <Col sm="9"></Col>
            <Col sm="3">
              {" "}
              <h6>
                <strong className="text-info">Makes No Sense</strong>
              </h6>
            </Col>
          </Row>
          <Row>
            <Col sm="9"></Col>
            <Col sm="3">
              <p className="text-primary">
                <Badge color="primary" pill>
                  M
                </Badge>
                :- Mandatory Field
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm="9"></Col>
            <Col sm="3">
              <p className="text-danger">
                <Badge color="danger" pill>
                  R
                </Badge>
                :- Required Field
              </p>
            </Col>
          </Row>

          <Row>
            <Col sm="4"></Col>
            <Col sm="6">
              <h4>
                <strong className="text-primary">
                  {" "}
                  UPDATE UIDAI DETAILS FARZI
                </strong>
              </h4>
            </Col>
          </Row>

          <Form onSubmit={this.onSubmit}>
            <Row>
              <Col sm="3">
                <FormGroup>
                  <Label for="firstName">
                    <h5>
                      First Name
                      <Badge color="primary" pill>
                        M
                      </Badge>
                    </h5>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    required
                    value={this.state.firstName}
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="3">
                <FormGroup>
                  <Label for="lastName">
                    <h5>
                      Last Name
                      <Badge color="primary" pill>
                        M
                      </Badge>
                    </h5>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    required
                    value={this.state.lastName}
                    onChange={this.onChange}
                  ></Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="3">
                <FormGroup>
                  <Label for="phoneNumber">
                    <h5>
                      Phone Number
                      <Badge color="primary" pill>
                        {" "}
                        M
                      </Badge>
                    </h5>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    placeholder="Enter Your Phone Number"
                    required
                    value={this.state.phoneNumber}
                    onChange={this.onChange}
                  ></Input>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col sm="3">
                <FormGroup>
                  <Label for="email">
                    <h5>
                      Email
                      <Badge color="primary" pill>
                        M
                      </Badge>
                    </h5>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                    value={this.state.email}
                    onChange={this.onChange}
                  ></Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="3">
                <FormGroup>
                  <Label for="aadharNumber">
                    <h5>
                      Aadhar Number
                      <Badge color="danger" pill>
                        R
                      </Badge>
                    </h5>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Input
                    type="text"
                    name="aadharNumber"
                    id="aadharNumber"
                    placeholder="Enter AadharNumber"
                    required
                    value={this.state.aadharNumber}
                    onChange={this.onChange}
                  ></Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="4"></Col>
              <Col sm="8">
                <p className="text-info">
                  {" "}
                  <strong className="warning">
                    Please Provide Your Address Details
                  </strong>
                </p>
              </Col>
            </Row>
            <Row>
              <Col sm="3">
                <FormGroup>
                  <Label for="addressLine1">
                    <h5>Address Line 1</h5>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="9">
                <Input
                  type="text"
                  name="addressLine1"
                  id="addressLine1"
                  placeholder="Enter Your addressLine1"
                  required
                  value={this.state.addressLine1}
                  onChange={this.onChange}
                ></Input>
              </Col>
            </Row>
            <Row>
              <Col sm="3">
                <FormGroup>
                  <Label for="addressLine2">
                    <h5>Address Line 2</h5>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="9">
                <FormGroup>
                  <Input
                    type="text"
                    name="addressLine2"
                    id="addressLine2"
                    placeholder="Enter AddressLine2"
                    required
                    value={this.state.addressLine2}
                    onChange={this.onChange}
                  ></Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="3">
                <FormGroup>
                  <Label for="city">
                    <h5>City</h5>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>
                  <Input
                    type="text"
                    name="city"
                    id="city"
                    placeholder="City"
                    required
                    value={this.state.city}
                    onChange={this.onChange}
                  ></Input>
                </FormGroup>
              </Col>
              <Col sm="1">
                <FormGroup>
                  <Label for="state">
                    <h5>State</h5>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="5">
                <FormGroup>
                  <Input
                    type="text"
                    name="state"
                    id="state"
                    placeholder="State"
                    required
                    value={this.state.state}
                    onChange={this.onChange}
                  ></Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="3">
                <FormGroup>
                  <Label for="country">
                    <h5>Country</h5>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>
                  <Input
                    type="text"
                    name="country"
                    id="country"
                    placeholder="Country"
                    required
                    value={this.state.country}
                    onChange={this.onChange}
                  ></Input>
                </FormGroup>
              </Col>
              <Col sm="2">
                <FormGroup>
                  <Label for="postalCode">
                    <h5>PostalCode</h5>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Input
                    type="number"
                    name="postCode"
                    id="postCode"
                    placeholder="PostCode"
                    required
                    value={this.state.postCode}
                    onChange={this.onChange}
                  ></Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="3">
                <FormGroup>
                  <Label for="type">
                    <h5>Type</h5>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <Input
                    type="select"
                    name="type"
                    id="type"
                    placeholder="Type"
                    required
                    value={this.state.type}
                    onChange={this.onChange}
                  >
                    <option>Select One</option>
                    <option>PRIMARY</option>
                    <option>SECONDARY</option>
                    <option>TERTIARY</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col sm="3">
                <FormGroup>
                  <Label for="longitude">
                    <h5>Longitude</h5>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="3">
                <FormGroup>
                  <Input
                    type="number"
                    name="longitude"
                    id="longitude"
                    placeholder="Longitude"
                    value={this.state.longitude}
                    onChange={this.onChange}
                  />
                </FormGroup>
              </Col>
              <Col sm="2">
                <FormGroup>
                  <Label for="latitude">
                    <h5>latitude</h5>
                  </Label>
                </FormGroup>
              </Col>
              <Col sm="4">
                <FormGroup>
                  <Input
                    type="number"
                    name="latitude"
                    id="latitude"
                    placeholder="Latitude"
                    value={this.state.latitude}
                    onChange={this.onChange}
                  ></Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col sm="12">
                <Button color="primary" className="col-12">
                  UPDATE
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </React.Fragment>
    );
  }
}

UpdateAadharCard.propTypes = {
  errors: PropTypes.object.isRequired,
  addAadharCard: PropTypes.func.isRequired,
  aadhar_card: PropTypes.object.isRequired,
  getAadharCardByID: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  errors: state.error,
  aadhar_card: state.aadhar_details.aadhar_card
});
export default connect(
  mapStateToProps,
  { addAadharCard, getAadharCardByID }
)(UpdateAadharCard);
