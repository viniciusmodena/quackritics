import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 70%;
  font-size: 14px;
  color: var(--grey-0);
  overflow-wrap: break-word;
  word-wrap: break-word;
`;

export const MainContainer = styled.div`
  padding-top: 20px;
  width: 95%;
  max-width: 380px;
  margin-top: 30px;
  height: 500px;
  padding-bottom: 20px;
  background-color: #090909e8;
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;

  @media (min-width: 900px) {
    max-width: 750px;
  }
  @media (min-height: 800px) {
    height: 700px;
  }
`;

export const BoxNewComment = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  border: 1px solid var(--grey-0);
  width: 90%;
  margin: 10px 0px;
  padding: 5px 8px;
  border-radius: 5px;
  height: fit-content;

  border-radius: 5px 0px 5px 5px;
  background-color: var(--grey-0);
  textarea:focus,
  input:focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
  textarea {
    width: 70%;
    margin-left: 5px;
    height: 50px;
    border: none;
    resize: none;
    background-color: var(--grey-0);
  }
  button {
    width: 25%;
  }
`;

export const ContainerCommentsTitle = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 8px;
  margin-bottom: 10px;
  border-bottom: 2px solid var(--primary);
  h1 {
    font-size: 30px;
    color: var(--primary);
  }
`;

export const ContainerComments = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 600px;
  margin-bottom: 20px;

  overflow: scroll;
  overflow-x: hidden;

  margin-right: 10px;

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
    width: 90%;
    margin: 10px 0px;
    padding: 10px 8px;
    min-height: 70px;
    border-radius: 5px;
    background-color: var(--grey-2);
    transition: 0.3s ease;
    position: relative;

    animation: cardTopic 0.7s linear;

    @keyframes cardTopic {
      0%{
        width: 50%;
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
    }
  }

  @media (min-width: 900px) {
    li {
      align-items: center;
      padding-top: 5px;
    }
  }
`;

export const ContainerUserDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 15%;

  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  span {
    font-size: 12px;
    margin-top: 10px;
    color: var(--primary);
  }

  @media (min-width: 900px) {
    img {
      width: 60px;
      height: 60px;
    }
  }
`;

export const ContainerCommentDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 80%;
  padding: 10px 0;
  min-height: 40px;
  margin-left: 15px;

  p {
    max-width: 100%;
    font-size: 14px;
  }

  @media (min-width: 900px) {
    p {
      font-size: 1.1rem;
    }
  }
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  position:absolute;
  top:2px;
  right:5px;
`;

export const ContainerNoComments = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  span {
    font-size: 14px;
    color: var(--grey-1);
    font-style: oblique;
  }
`;

export const ContainerDate = styled.span`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  position: absolute;
  right: 10px;
  bottom: 2px;
  color: var(--grey-1);
  font-size: 8px;
  line-height: 14px;
  font-style: oblique;
  @media (min-width: 900px) {
    font-size: 12px;
    bottom: 5px;
  }
`;
