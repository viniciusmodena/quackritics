import styled from "styled-components";

export const Container = styled.div`
  background: linear-gradient(183.62deg, #5f6162 -19.34%, #090909 138%);
  display: flex;
  align-items: center;
  justify-content: space-between;

  box-shadow: 0px 5px 5px 5px rgba(0, 0, 0, 0.5);

  padding: 10px;

  max-width: 100vw;

  h1 {
    font-size: 30px;
  }

  @media (min-width: 900px) {
    h1 {
      font-size: 50px;
    }
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 250px;
  width: 100%;
  margin-left: 16px;
  div + div {
    margin-top: 8px;
  }
  @media (min-width: 900px) {
    height: max-content;
    max-width: 500px;
    flex-direction: row-reverse;
    div + div {
      margin-top: 0;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  button {
    padding: 8px 16px;
    width: 100%;
  }
  button + button {
    margin-left: 8px;
  }
  @media (min-width: 900px) {
    margin-left: 8px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  img {
    display: flex;
    height: 24px;
    position: absolute;
    left: 8px;
  }
  input {
    padding: 10px 42px;
    border: none;
    border-radius: 8px;
    outline: none;
    transition: 0.5s;
    width: 100%;
    :focus {
      outline: 2px solid var(--primary);
    }
  }
  button {
    padding: 5px 8px;
    width: auto;
    height: auto;
    position: absolute;
    right: 4px;
  }
`;
