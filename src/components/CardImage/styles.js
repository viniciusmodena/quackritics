import styled from "styled-components";

export const Image = styled.img`
  width: ${(props) => props.width && props.width};
  height: ${(props) => props.heigth && props.heigth};
  border-radius: 3px;

  @media (min-width: 1100px) {
    width: ${(props) => props.mWidth && props.mWidth};
    height: ${(props) => props.mHeigth && props.mHeigth};
  }
`;
