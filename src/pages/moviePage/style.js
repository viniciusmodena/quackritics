import styled from "styled-components";
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  @media (min-width: 1024px) {
    flex-direction: unset;
    width: 100vw;
    align-items: center;
    justify-content: center;
  }
  @media (min-width: 1440px) {
    max-width: 1440px;
    width: 81%;
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }
`;
export const MoviesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 90%;
  max-width: 620px;
  margin-top: 15px;
  h2 {
    color: var(--grey-0);
    font-size: 17px;
    margin-bottom: 5px;
  }
  @media (min-width: 1024px) {
    justify-content: center;
    align-items: center;
    margin: 0px;
    height: 85vh;
    width: 60%;
    h2 {
      // display: none;
    }
  }
  @media (min-width: 1440px) {
    margin-right: 50px;
  }
`;
export const MoviesContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 95vw;
  max-width: 620px;
  height: 40vh;
  border-radius: 10px;
  // background-color: var(--opacity);
  // background-color:#090909e8;
  background-color: rgba(0, 0, 0, 0.8);

  @media (min-width: 1024px) {
    max-width: 600px;
    height: 45vh;
    margin-left: 10px;
  }
  // @media (min-width: 1440px) {
  //   max-width: 680px;
  // }
`;
export const BoxImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MoviesImg = styled.div`
  width: 30vw;
  max-width: 150px;
  height: 25vh;
  margin-bottom: 29px;
  margin: 0px 0px 19px 5px;
  img {
    width: 100%;
    height: 25vh;
    max-width: 150px;
    border-radius: 5px;
  }
  @media (min-width: 1024px) {
    width: 15vw;
    height: 35vh;
    max-width: 200px;
    img {
      max-width: 300px;
      height: 35vh;
    }
  }
`;
export const MoviesReviews = styled.div`
  height: 15px;
  width: 100px;
  margin-bottom: 10px;
  @media (min-width: 1024px) {
  }
`;
export const MoviesDescription = styled.div`
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  width: 55vw;
  max-width: 400px;
  height: 30vh;
  background-color: var(--grey-2);
  border-radius: 5px;
  margin: 0px 10px 0px 10px;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 3px;
  }
  h3 {
    color: var(--primary);
    margin: 8px 0px 10px 10px;
  }
  span {
    color: var(--grey-0);
    margin: 0px 0px 10px 10px;
  }
  p {
    color: var(--grey-1);
    margin: 5px 0px 0px 10px;
  }
  @media (min-width: 1024px) {
    height: 40.5vh;
  }
`;
export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30vh;
  width: 90%;
  max-width: 620px;
  margin-top: 15px;
  margin-bottom: 27px;
  h2 {
    font-size: 17px;
    margin-bottom: 5px;
    color: var(--grey-0);
  }
  @media (min-width: 1024px) {
    h2 {
      // display: none;
    }
  }
`;
export const UserReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95vw;
  max-width: 620px;
  height: 30vh;
  border-radius: 10px;
  // background-color: var(--opacity);
  background-color: #090909e8;
  @media (min-width: 1024px) {
    height: 30vh;
    max-width: 600px;
    margin-left: 10px;
    margin-bottom: 8px;
  }
  // @media (min-width: 1440px) {
  //   max-width: 680px;
  // }
`;
export const UserReviewDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100vw;
  max-width: 610px;
  height: 100%;

  border-radius: 5px;

  /* background: var(--grey-2);
  
  padding: 5px;
  
  box-sizing: border-box; */

  @media (min-width: 1024px) {
  }
`;
export const BoxIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90vw;
  max-width: 620px;
  height: 8vh;
  margin-top: 8px;
`;
export const BoxUserInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 50%;
  margin-left: 15px;
  img {
    margin-right: 10px;
    border-radius: 50%;
    width: 60px;
    height: 60px;

    @media (min-width: 1024px) {
      width: 80px;
      height: 80px;
      max-width: none;
    }
  }
  h3 {
    color: var(--primary);
    font-size: 1.2rem;
  }
  @media (min-width: 1024px) {
    margin-left: 25px;
  }
`;
export const BoxEditReview = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 50%;
  margin-right: 15px;
  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40px;
    margin-right: 5px;
    opacity: 100%;
    height: 5vh;
    color: var(--grey-0);
    transition: 0.5s;

    :hover {
      transform: scale(1.1);
    }
  }
  @media (min-width: 1024px) {
    margin-right: 25px;
  }
`;
export const BoxUserReviewDesc = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 90vw;
  max-width: 550px;
  height: 7vh;

  &::-webkit-scrollbar {
    height: 8px;
    width: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 5px;
  }
  p {
    margin: 8px 0px 0px 15px;
    color: var(--grey-0);
  }
  @media (min-width: 1024px) {
    margin: 8px 0px 0px 30px;
  }
`;
export const BoxUserReviews = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 89vw;
  max-width: 620px;
  height: 15px;
  margin-left: 20px;
  margin-bottom: 10px;
  font-size: 2rem;

  span {
    color: var(--grey-1);
    margin-right: 10px;
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    max-width: 560px;
    margin-left: 0px;
    margin-bottom: 15px;
  }
`;
export const UserNewReview = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  align-content: flex-start;
  width: 100%;
  max-width: 100%;
  height: 100%;
  border-radius: 0px 0px 5px 5px;

  div {
    margin-top: 10px;
  }
`;
export const BoxNewReview = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid var(--grey-0);
  width: 95%;
  height: 6vh;
  border-radius: 5px 0px 5px 5px;
  background-color: var(--grey-0);
  margin-bottom: 10px;
  transition: 0.5s;
  :hover {
    transform: scale(1.02);
  }
  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  input {
    width: 70%;
    max-width: 390px;
    margin-left: 5px;
    height: 4vh;
    border: none;
  }
  button {
    width: 25%;
    height: 5vh;
    margin-left: 6px;
  }
  @media (min-width: 1024px) {
    width: 96%;
    button {
      width: 28%;
    }
  }
`;
export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95vw;
  max-width: 620px;
  height: 47vh;
  border-radius: 10px;
  background-color: #090909e8;
  overflow: scroll;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    border-radius: 3px;
  }
  margin-bottom: 38px;
  @media (min-width: 1024px) {
    margin-top: 20px;
    max-width: 390px;
    height: 75.8vh;
  }
`;
export const ReviewsCards = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 13vh;
  border-radius: 5px 0px 5px 5px;
  background-color: var(--grey-3);
  margin-top: 7px;
  margin-bottom: 10px;
  transition: 0.3s ease;
  cursor: pointer;
  position: relative;
  animation: cardTopic 0.5s ease-in-out;
  padding: 5px;
  &:hover {
    box-shadow: 0px 0px 10px 0px #fff;
    transform: scale(1.05);
  }
  @keyframes cardTopic {
    0% {
      width: 0px;
    }
    100% {
      width: 80%;
    }
  }
`;
export const ReviewBoxUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
  height: 13vh;
  position: absolute;
  left: 0px;
  top: 8px;

  img {
    height: 50px;
    width: 50px;
    margin-bottom: 5px;
  }
  h3 {
    color: var(--primary);
    font-size: 13px;
  }
`;
export const ReviewBoxDescription = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
  width: 50%;
  height: 13vh;
  position: absolute;
  left: 90px;
  top: 5px;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  p {
    color: var(--grey-0);
    margin: 15px 0px 0px 10px;
  }
`;
export const ReviewBoxButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: 13vh;
  font-size: 20px;
  position: absolute;
  right: 5px;
  button {
    width: 70%;
    height: 4vh;
    color: var(--grey-0);
    margin-bottom: 5px;
    font-size: 9px;
  }
  span {
    font-size: 0.6rem;
    color: var(--grey-1);
    text-align: center;
    padding-top: 5px;
  }
  @media (min-width: 600px) {
    button {
      font-size: 14px;
      height: 5vh;
    }
  }
  @media (min-width: 1024px) {
    button {
      width: 79%;
    }
  }
`;
