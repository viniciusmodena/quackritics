import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: #121214;

  min-height: 300px;
  width: 90%;
  max-width: 400px;

  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  border-radius: 10px;

  padding: 10px;

  margin-top: 20px;

  section {
    margin: 20px;

    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    span {
      color: #868e96;
    }

    a {
      margin-top: 5px;
      color: #ffe100;
    }
  }

  button {
    margin-bottom: 15px;

    width: 80%;
  }
`;

export const FormTitle = styled.h2`
  width: 100%;

  text-align: center;

  margin-top: 10px;

  color: #ffe100;

  font-size: 1.5rem;
  font-weight: 800;
  font-family: Oleo Script;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  padding: 10px;
  margin-top: 10px;

  input[type="checkbox"] {
    transform: scale(1.5);
  }

  p {
    margin-left: 5px;
    color: var(--grey-0);
  }
`;
