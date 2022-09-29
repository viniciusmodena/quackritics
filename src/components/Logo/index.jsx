import React from "react";
import { StyledLogo } from "./style";
import { useHistory } from "react-router-dom";

const Logo = () => {
  const history = useHistory()
  
  return <StyledLogo onClick={() => history.push('/')}>Quackritics</StyledLogo>;
};

export default Logo;
