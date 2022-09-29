import styled from "styled-components";

export const StyledLogo = styled.a`
  cursor: pointer;
  background: #ffe100;
  background: -moz-linear-gradient(top, #ffe100 0%, #ffe100 50%, #c59237 100%);
  background: -webkit-linear-gradient(
    top,
    #ffe100 0%,
    #ffe100 60%,
    #c59237 100%
  );
  background: linear-gradient(to bottom, #ffe100 0%, #ffe100 50%, #c59237 100%);

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  font-size: 2rem;
  font-family: Oleo Script;

  @media (min-width: 900px) {
    font-size: 2.5rem;
  }
`;
