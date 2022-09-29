import styled from "styled-components";

export const StyledFooter = styled.footer`
  max-width: 100%;
  width: 100%;
  height: 100px;

  background-color: rgba(0, 0, 0, 0.8);

  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  align-content: flex-start;
  justify-items: flex-start;

  overflow: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 900px) {
    align-items: center;
    justify-content: center;
    align-content: center;

    overflow: hidden;

    padding-bottom: 5px;

    height: auto;
  }

  h2 {
    width: 100%;

    color: var(--grey-0);
    
    font-size: 1.2rem;
    text-align: center;

    margin-top: 5px;
  }
`;

export const FooterList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-flow: row wrap;

  width: 100%;
  /* height: 170px; */

  @media (min-width: 900px) {
    flex-flow: row nowrap;
    justify-content: center;

    width: 80%;
    height: 100%;
  }
`;

export const FooterCard = styled.li`
  width: 33%;
  height: 100px;

  margin-top: 3px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow: column nowrap;

  .imgDiv {
    width: 50px;
    height: 50px;
    float: left;
    background-size: cover;
    border-radius: 50%;
  }

  p {
    color: var(--grey-0);
    font-size: 0.8rem;
    margin: 5px;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    gap: 10px;

    a {
      .icons {
        font-size: 1.3em;
        fill: var(--grey-1);
        background: var(--grey-4);
        border-radius: 50%;
        border: none;

        transition: 0.3s;

        :hover {
          fill: var(--primary);
          transform: scale(1.2);
        }
      }
    }
  }

  @media (min-width: 900px) {
    height: 90%;

    justify-content: space-around;
  }
`;
