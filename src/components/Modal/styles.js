import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 70px;
  h3 {
    display: flex;
    justify-content: center;
    margin-left: 3vw;
    width: 100%;
    color: var(--primary);
    font-family: "Oleo script";
    font-size: 1.4rem;
  }
  > button {
    width: 50px;
    color: white;
    height: 50px;
    font-size: 25px;
    margin-top: 10px;
    background-color: transparent;
    font-weight: bold;
    border-radius: 5px;
    border: none;
  }
`;

export const MainContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 35vw;
  min-width: 300px;
  margin: 0 auto;
  margin-top: 200px;
  padding: 15px;
  height: auto;
  border-radius: 8px;
  background-color: var(--grey-4);
  button {
    margin-top: 15px;
  }
  span {
    width: 80%;
    color: var(--negative);
  }

  &:hover {
    box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.5);
  }
  &:focus {
    box-shadow: 0px 0px 30px rgba(255, 255, 255, 0.5);
  }
`;

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  color: white;
  transition: 0.5s;

  p {
    width: 80%;
    margin-top: 15px;
    margin-bottom: 10px;
    transition: 0.5s;
  }

  textarea {
    border-radius: 8px;
    resize: none;
    font-family: "Nunito";
    width: 80%;
    &:focus {
      outline: 2px solid var(--primary);
    }
  }

  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
    p {
      color: var(--primary);
      transform: translateX(15px);
      transition: 0.5s;
    }
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  width: 82%;
  height: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  label {
    transition: 0.3s;
    color: var(--grey-0);
  }
  > div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  &:hover {
    label {
      transform: translateX(15px);
      color: var(--primary);
    }
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  width: 80%;
  padding: 10px;
  height: 120px;
  overflow: scroll;
  overflow-y: hidden;
  a {
    &:focus img {
      border: solid 2px var(--grey-0);
      box-shadow: 0px 0px 10px var(--primary);
    }
  }
  &::-webkit-scrollbar {
    height: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 3px;
  }
`;

export const Image = styled.img`
  width: 100px;
  height: 100px;
  margin: 0 10px;
  border-radius: 3px;
  border: 2px solid transparent;
  &:active {
    border: 2px solid var(--grey-0);
  }
  &:hover {
    transition: 0.3s;
    transform: scale(1.04);
    border: 2px solid var(--grey-0);
    box-shadow: 0px 0px 10px var(--primary);
  }
`;
