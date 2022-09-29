import React from "react";
import { StyledInput, StyledLabel, Container } from "./style";

const Input = ({ type, description, placeholder, register, name, error }) => {
  return (
    <Container>
      <StyledLabel>{description}</StyledLabel>
      {!!error && <span>{error}</span>}
      <StyledInput type={type} placeholder={placeholder} {...register(name)} />
    </Container>
  );
};

export default Input;
