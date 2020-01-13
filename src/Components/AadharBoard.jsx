import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardHeader,
  Button,
  Row,
  Col,
  Badge,
  Alert,
  Container
} from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllAadharCard } from "../Actions/aadharCardActions";
import AadharItem from "./AadharCard/AadharItem";

class AadharBoard extends Component {
  componentDidMount() {
    this.props.getAllAadharCard();
  }
  render() {
    const { aadhar_cards } = this.props.aadhar_cards;

    let primaryList = [];
    let secondaryList = [];
    let tertiaryList = [];

    let aadharAlgorithm = aadhar_data => {
      if (aadhar_cards.length <= 0) {
        return <Alert color="danger">Sorry No Data Found</Alert>;
      } else {
        const task = aadhar_cards.map(aadhar_card => (
          <AadharItem key={aadhar_card.id} aadhar_card={aadhar_card} />
        ));
        for (let iter = 0; iter < task.length; iter++) {
          if (task[iter].props.aadhar_card.address.type === "PRIMARY") {
            primaryList.push(task[iter]);
          }
          if (task[iter].props.aadhar_card.address.type === "SECONDARY") {
            secondaryList.push(task[iter]);
          }
          if (task[iter].props.aadhar_card.address.type === "TERTIARY") {
            tertiaryList.push(task[iter]);
          }
        }
      }

      return (
        <React.Fragment>
          <Row>
            <Col sm="3">
              <Button color="primary" tag="a" href="/addAadharCard">
                Register New Aadhar
              </Button>
            </Col>
          </Row>
          <Row>
            <Col sm="4">
              <Card className="bg-dark">
                <CardHeader className="text-danger">
                  <h5>
                    PRIMARY
                    <Badge color="warning" pill>
                      {8}
                    </Badge>
                  </h5>
                </CardHeader>
              </Card>
              {primaryList}
            </Col>
            <Col sm="4">
              <Card className="bg-dark">
                <CardHeader className="text-danger">
                  <h5>
                    SECONDARY
                    <Badge color="warning" pill>
                      {secondaryList.length}
                    </Badge>
                  </h5>
                </CardHeader>
                {secondaryList}
              </Card>
            </Col>
            <Col sm="4">
              <Card className="bg-dark">
                <CardHeader className="text-danger">
                  <h5>
                    TERTIARY
                    <Badge color="warning" pill>
                      {tertiaryList.length}
                    </Badge>
                  </h5>
                </CardHeader>
              </Card>
              {tertiaryList}
            </Col>
          </Row>
        </React.Fragment>
      );
    };
    aadharAlgorithm(aadhar_cards);
    return (
      <React.Fragment>
        <Container>
          <br></br>
          <Row>
            <Col sm="3">
              <Button color="primary" tag="a" href="/addAadharCard">
                Register New Aadhar
              </Button>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col sm="4">
              <Card className="bg-dark">
                <CardHeader className="text-danger">
                  <pre>
                    <h5 className="text-danger text-center">
                      PRIMARY
                      <Badge color="warning" pill>
                        {primaryList.length}
                      </Badge>
                    </h5>
                  </pre>
                </CardHeader>
              </Card>
              {primaryList}
            </Col>
            <Col sm="4">
              <Card className="bg-dark">
                <CardHeader className="text-danger">
                  <h5>
                    SECONDARY
                    <Badge color="warning" pill>
                      {secondaryList.length}
                    </Badge>
                  </h5>
                </CardHeader>
              </Card>
              {secondaryList}
            </Col>
            <Col sm="4">
              <Card className="bg-dark">
                <CardHeader className="text-danger">
                  <h5>
                    TERTIARY
                    <Badge color="warning" pill>
                      {tertiaryList.length}
                    </Badge>
                  </h5>
                </CardHeader>
              </Card>
              {tertiaryList}
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

AadharBoard.propTypes = {
  getAllAadharCard: PropTypes.func.isRequired,
  aadhar_cards: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  aadhar_cards: state.aadhar_details
});
export default connect(
  mapStateToProps,
  { getAllAadharCard }
)(AadharBoard);
