import React from "react";
import PropTypes from "prop-types";
import LogoImg from "../../assets/logo.png";

const Logo = ({ height }) => (
  <img src={LogoImg} alt="Logo" style={{ height }} />
);

Logo.propTypes = {
  height: PropTypes.number,
};

export default Logo;
