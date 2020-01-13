import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

class NavBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar className="bg-dark">
          <NavbarBrand tag="a" href="/" className="text-primary">
            Aadhar Card
          </NavbarBrand>
          <Nav>
            <NavItem>
              <NavLink tag="a" href="/addAadharCard">
                {" "}
                Register AC
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag="a" href="https://github.com/1InfinityDoesExist">
                1InfinityDoesExist
              </NavLink>
            </NavItem>
          </Nav>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default NavBar;
