import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const CenterBox = styled.div`
  display: flex;
  flex-flow: column nowrap;

  width: 100%;

  @media (min-width: 900px) {
    flex-flow: row nowrap;
    justify-content: space-between;

    width: 90%;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;

  width: 75vw;
  max-height: 80vh;
  min-height: 70vh;
  max-width: 1200px;
  background-color: rgba(0, 0, 0, 0.8);

  border-radius: 10px;

  margin-top: 25px;

  padding: 10px;

  @media (min-width: 900px) {
    max-height: 85vh;

    flex-flow: row nowrap;
    justify-content: center;
  }
  @media (min-width: 1200px) {
    min-width: 995px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  width: 100%;

  min-height: 250px;
  max-height: 300px;

  @media (min-width: 900px) {
    flex-flow: column nowrap;
    justify-content: flex-start;
    max-height: 90%;

    width: 35%;
    max-width: 400px;
  }
`;

export const ImageButtonContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  width: 45%;

  button {
    width: 100%;
    max-width: 260px;
    font-size: 0.8rem;

    :hover {
      transform: scale(1.02);
    }

    @media (min-width: 425px) {
      font-size: 1rem;
    }
  }

  @media (min-width: 900px) {
    align-items: flex-start;
    justify-content: space-around;
    height: 400px;
    width: 85%;

    button {
      margin-bottom: 10px;
      max-width: 285px;

      width: 102%;
    }
  }
`;

export const UserImage = styled.img`
  border: 2px solid var(--grey-0);
  border-radius: 8px;

  width: 100%;
  max-width: 260px;

  height: 80%;

  @media (min-width: 900px) {
    max-width: 280px;
    max-height: 250px;
    width: 100%;
  }
`;

export const UserDescription = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-flow: column nowrap;

  background-color: var(--grey-2);

  border-radius: 8px;

  padding: 10px;

  width: 33vw;

  max-width: 267px;

  color: var(--grey-0);

  font-size: 1.2rem;

  h3 {
    color: var(--primary);
    font-size: 2rem;
    line-break: anywhere;
    margin-bottom: 30px;
  }

  @media (min-width: 900px) {
    height: 20%;
    width: 80%;
  }
`;

export const ReviewTitle = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  align-items: center;

  color: var(--grey-0);

  margin-top: 10px;

  margin-bottom: 15px;

  button {
    color: var(--grey-0);

    width: 30%;
    max-width: 240px;

    :hover {
      transform: scale(1.05);

      background-color: var(--grey-1);
      color: var(--negative);

      border: 1px solid var(--negative);
    }
  }

  @media (max-width: 460px) {
    margin-bottom: 15px;
  }

  @media (min-width: 900px) {
    margin-bottom: 10px;
  }
`;

export const UserReview = styled.ul`
  width: 100%;
  max-height: 200px;

  overflow: scroll;
  overflow-x: hidden;

  display: flex;
  flex-flow: column nowrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: center;

  padding: 10px;

  &::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 5px;
  }

  li {
    width: 90%;

    display: flex;
    flex-flow: row nowrap;
    align-items: center;

    padding: 10px;

    margin-top: 10px;

    background-color: var(--grey-2);

    border-radius: 8px;
    position: relative;

    cursor: pointer;

    transition: 0.5s;

    position: relative;

    .movieTitle {
      color: var(--primary);
      font-style: italic;
    }

    .containerImage{
      width: 30%;

      @media (min-width: 1200px){
        max-width: 110px;
      }
    }

    span {
      color: var(--grey-1);
      font-size: 0.6rem;

      margin-left: 10px;

      position: absolute;
      bottom: 5px;
      right: 5px;
    }

    :hover {
      transform: scale(1.03);
      box-shadow: 0px 0px 10px 0px var(--grey-0);
    }

    @media(min-width: 1200px) {
      min-width: 555px;
    }
  }

  @media (min-width: 900px) {
    max-height: 90%;
  }

  @media (min-width: 1200px) {
    min-width: 565px;
  }
`;

export const ReviewContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: 900px) {
    width: 60%;
  }

  @media (min-width: 1600px) {
    width: 100%;
  }
`;

export const PaginationStyled = styled.div`
  /* position: absolute; */
  display: ${(props) => (props.show ? "none" : "flex")};

  bottom: 10px;
  @media (max-width: 460px) {
    display: ${(props) => (props.show ? "flex" : "none")};
    margin: 0 auto;
    margin-top: 23px;
  }
`;
