import styled from "styled-components";

export const Container = styled.div``;

export const Button = styled.button`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 0;
  margin: 0;
  background-color: var(--negative);
  border: none;
  border-radius: 5px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
`

export const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 300px;
  border-radius: 8px;
  border: 1px solid black;
  background-color: var(--grey-4);
  @media (min-width: 900px) {
    max-width: 6 00px;
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  button {
    width: 50px;
    color: white;
    margin-top: 10px;
    font-size: 20px;
    background-color: transparent;
    font-weight: bold;
    border-radius: 5px;
    border: none;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 10px 0;
  border-radius: 8px;
  background-color: var(--grey-4);

  h2 {
    color: var(--primary);
    font-size: 14px;
    text-align: center;
    @media (min-width: 900px) {
      font-size: 18px;
    }
  }
`;
export const ModalFooter = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  padding: 15px 0;

  button {
    width: 80px;
    padding: 5px 10px;
    font-family: "Nunito";
    border: none;
    font-weight: 600;
    font-size: 15px;
    border-radius: 5px;
    &:hover {
      transform: scale(1.05);
    }
  }

  .confirm-button {
    background-color: var(--negative);
  }
  .cancel-button {
    background-color: var(--grey-1);
  }
`;
