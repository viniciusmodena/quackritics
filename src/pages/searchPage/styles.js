import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70%;
`;

export const MainContainer = styled.div`
  border-radius: 10px;

  padding: 5px 5px 25px;
  min-width: 30vw;
  width: 95vw;
  max-width: 580px;
  margin-top: 30px;
  height: 500px;
  background-color: #090909e8;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  h1 {
    margin: 5px auto;
    font-size: 1.6rem;
    color: var(--primary);
  }

  @media (min-width: 900px) {
    & {
      width: 580px;
      padding: 5px 30px 0px;
    }
  }
  @media (min-height: 800px) {
    & {
      height: 700px;
    }
  }
`;
export const ContainerSearch = styled.div`
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
  }
  li {
    display: flex;
    min-width: 90%;
    width: 80%;
    margin: 10px 0px 10px 0px;
    padding: 10px 0px 10px 8px;
    min-height: 70px;
    border-radius: 5px;
    background-color: var(--grey-2);
    transition: 0.3s ease;
    cursor: pointer;
    position: relative;

    Skeleton {
      position: absolute;
      right: 20px;
      top: 10px;
    }

    &:hover {
      box-shadow: 0px 0px 10px 0px #fff;
      transform: scale(1.05);
    }

    p {
    }
  }

  @media (min-width: 900px) {
    li {
      align-items: center;
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
  width: 100px;
  img {
    height: 120px;
  }

  .imgDiv {
    height: 120px;
    width: 80px;
    background-size: cover;
    background-position: center;
    /* border-radius: 50%; */
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
    margin: 15px 5px 0 0;
  }

  @media (min-width: 900px) {
    h3 {
      font-size: 1rem;
      margin-bottom: 5px;
    }
    p {
      font-size: 1.1rem;
    }

    h3,
    p {
      width: 390px; // Example for width
    }
  }
`;

export const ContainerRating = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  color: var(--grey-1);
  right: 20px;
  top: 10px;
  span {
    margin: 0;
  }

  .countContainer {
    margin-left: 7px;
  }
`;

export const PaginationStyled = styled.div`
  position: absolute;
  bottom: 10px;
`;
