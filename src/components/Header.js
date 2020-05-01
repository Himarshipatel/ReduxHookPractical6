import React from "react";
import { Images } from "../components";

import { Navbar, ButtonToggle } from "reactstrap";

const Header = () => {
  return (
    <Navbar className="header">
      <Images />
      <div className="title">Panda</div>
      <div className="button">
        <ButtonToggle color="secondary" size="lg" disabled>
          Sign Up
        </ButtonToggle>
        {"  "}
        <ButtonToggle color="success" size="lg">
          Log In
        </ButtonToggle>{" "}
      </div>
    </Navbar>
  );
};
export default Header;
