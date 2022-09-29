import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70%;
`;

export const MainContainer = styled.div`
  padding: 5px 5px 15px;
  min-width: 30vw;
  width: 95vw;
  margin-top: 30px;
  height: 500px;
  background-color: #090909e8;

  border-radius: 10px;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  @media (min-width: 900px) {
    max-width: 55vw;
    padding: 5px 30px 15px;
  }

  @media (min-height: 800px) {
    height: 700px;
  }
`;

export const ContainerTitleButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 90%;
  height: 60px;
  padding: 5px;
  h1 {
    margin: 0 auto;
    font-size: 1.6rem;
    color: var(--primary);
  }
  button {
    width: 100px;
    height: 30px;
    max-height: 700px;
    border-radius: 5px 5px 5px 5px;
    margin-right: 11px;
  }
`;

export const ContainerTopics = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 600px;
  overflow: scroll;
  overflow-x: hidden;
  margin-bottom: 20px;
  &::-webkit-scrollbar {
    height: 10px;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 5px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    padding: 10px;
  }
  li {
    display: flex;
    min-width: 90%;
    width: 80%;
    margin: 4px 0px 4px 0px;
    padding: 20px 0px 10px 8px;
    min-height: 70px;
    border-radius: 5px;
    background-color: var(--grey-2);
    transition: 0.3s ease;
    cursor: pointer;
    position: relative;

    &:hover {
      box-shadow: 0px 0px 10px 0px var(--grey-0);
      transform: scale(1.03);
    }
    span {
      position: absolute;
      bottom: 5px;
      right: 2px;
      color: var(--grey-1);
      font-size: 0.6rem;
      line-height: 1.2rem;
      /* width: 80px; */
      margin-right: 10px;
    }
  }

  @media (min-width: 900px) {
    li {
      align-items: center;
      padding-top: 5px;
      height: 80px;
    }

    span {
      margin-right: 20px;
    }
  }
`;

export const ContainerImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15%;
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  @media (min-width: 900px) {
    img {
      width: 60px;
      height: 60px;
    }
  }
`;

export const ContainerTopicDetails = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 85%;
  margin-left: 10px;
  position: relative;
  h3 {
    color: var(--primary);
  }

  h3,
  p {
    width: 170px; // Example for width
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    overflow: hidden;
  }
  p {
    color: var(--grey-0);
    margin: 4px 0;
  }

  @media (min-width: 1200px) {
    h3 {
      font-size: 1.2rem;
      margin-bottom: 5px;
    }
    p {
      font-size: 1.1rem;
    }

    h3,
    p {
      width: 400px; // Example for width
    }
  }
`;

export const ContainerSpoiler = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.spoiler === true ? "space-between" : "flex-end"};
  width: 100%;
  height: 30%;
  position: absolute;
  top: 5px;
  right: 0px;
  cursor: default;

  @media (min-width: 900px) {
    top: 15px;
  }

  .spoiler {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 8px;
    font-weight: 500;
    line-height: 14px;
    text-transform: uppercase;
    padding: 5px 10px;
    background-color: var(--negative);
    box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    border: none;
    color: var(--grey-0);
    @media (min-width: 900px) {
      font-size: 12px;
      padding: 7px 14px;
    }
  }
  div {
    display: flex;
    align-items: flex-end;
    img {
      width: 18px;
      height: 16px;
    }

    p {
      color: var(--negative);
      font-family: "Oleo Script";
      margin-right: 10px;
      padding-left: 4px;
    }
    @media (min-width: 900px) {
      img {
        width: 29px;
        height: 23px;
      }
      p {
        font-size: 1.1rem;
      }
    }
  }
`;

export const PaginationStyled = styled.div`
  position: absolute;
  bottom: 10px;
`;
