import { systemProps } from "@chakra-ui/react";
import styled from "styled-components";

export const PageContainer = styled.div`
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
`;

export const PageUl = styled.div`
  margin-bottom: 30px;
  max-width: 100%;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .lista_filmes > *:not(:first-child) {
    margin-top: 5px;
  }
`;

export const FilmList = styled.ul`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 300px;
  gap: 10px;
  overflow: scroll;
  overflow-y: hidden;
  padding: 0 10px 0 10px;
  max-width: 800px;
  margin: auto;

  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 5px;
  }

  @media (min-width: 900px) {
    max-width: 80%;
  }

  li{
    cursor:pointer;
  }
`;

export const TopicList = styled.ul`
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 260px;
  gap: 5px;
  overflow: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    height: 8px;
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 5px;
  }
`;

export const PageButtons = styled.div`
  color: #fff;
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;

  @media (min-width: 900px) {
    gap: 50px;
  }
`;

export const ButtonMain = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  background: var(--primary-gradient);
  height: 35px;
  width: 120px;
  border: none;
  border-radius: 5px;
  font-weight: 300;
  font-size: 15px;
  font-family: Nunito;
`;

export const MainContainer = styled.div`
  padding: 5px 5px 15px;
  min-width: 30vw;
  width: 95%;
  margin-top: 30px;
  height: 500px;
  background-color: #090909e8;

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
  max-width: 770px;
  max-height: 600px;
  overflow: scroll;
  overflow-x: hidden;
  margin-bottom: 20px;
  &::-webkit-scrollbar {
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 3px;
  }
  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  li {
    display: flex;
    width: 90%;
    margin: 4px 0px 4px 0px;
    padding: 20px 0px 10px 8px;
    max-width: 750px;
    min-height: 70px;
    border-radius: 5px;
    background-color: var(--grey-2);
    transition: 0.3s ease;
    cursor: pointer;
    position: relative;
    animation: cardTopic 0.5s ease-in-out;

    &:hover {
      box-shadow: 0px 0px 10px 0px #fff;
      transform: scale(1.05);
    }
    span {
      position: absolute;
      bottom: 5px;
      right: 2px;
      color: var(--grey-1);
      font-size: 0.6rem;
      line-height: 1.2rem;
      margin-right: 10px;
      cursor: pointer;
    }

    @keyframes cardTopic {
      0% {
        width: 50%;
        opacity: 0;
      }
      100% {
        width: 80%;
        opacity: 1;
      }
    }
  }

  @media (min-width: 900px) {
    li {
      align-items: center;
      padding-top: 5px;
      height: 80px;
      margin: 4px;
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
    width: 170px; 
    white-space: nowrap;
    text-overflow: ellipsis;
    display: inline-block;
    overflow: hidden;
    cursor: pointer;
  }
  p {
    color: var(--grey-0);
    margin: 4px 0;
  }

  @media (min-width: 1200px) {
    h3 {
      font-size: 16px;
      margin-bottom: 5px;
    }
    p {
      font-size: 12px;
    }

    h3,
    p {
      width: 400px;
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
  top: 0px;
  cursor: default;

  @media (min-width: 900px) {
    top: 20px;
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
export const ContainerForum = styled.div`
  padding: 5px 5px 15px;
  min-width: 30vw;
  width: 95vw;
  margin-top: 50px;
  /* height: 500px; */
  background-color: #090909e8;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  border-radius: 10px;

  h1 {
    margin: 5px auto 10px;
    font-size: 2.2rem;
    color: var(--primary);
  }

  @media (min-width: 900px) {
    max-width: 830px;
    padding: 5px 30px 15px;
  }

  @media (min-height: 800px) {
    /* height: 700px; */
  }
`;

export const ContainerCarousel = styled.div`
  margin: 30px auto;
  background-color: rgba(0, 0, 0, 0.8);
  padding-top: 5px;
  margin-top: 50px;
  border-radius: 10px;
  padding: 10px;
  h1 {
    margin: 0px auto 10px;
    font-size: 2.2rem;
    color: var(--primary);
  }

  li{
    transition: 0.3s;

    :hover{
      transform: translateY(4px) scale(1.03);
    }

    img{
      transition: 0.3s;

      border-radius: 5px;

      :hover{
        box-shadow: 0px 0px 10px 0px var(--grey-0);
      }
    }
  }
  @media (min-width: 900px) {
    max-width: 100%;
  }
`;

export const RatingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
