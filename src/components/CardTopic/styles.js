import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 90%;
  height: auto;

  padding: 10px;
  border-radius: 5px;
  overflow-wrap: break-word;
  word-wrap: break-word;

  background-color: var(--grey-2);

  @media (min-width: 900px) {
    max-width: 750px;
  }
`;

export const ContainerDetails = styled.div`
  display: flex;
  width: 100%;
  height: auto;
`;

export const ContainerImgName = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 15%;
  height: 100%;
  color: var(--primary);
  span {
    font-weight: 600;
    font-size: 12px;
    margin-top: 10px;
    color: var(--primary);
  }
  img {
    border-radius: 50%;
    width: 40px;
    height: 40px;
  }

  @media (min-width: 900px) {
    margin-left: 0;
    span {
      font-size: 14px;
    }
    img {
      width: 60px;
      height: 60px;
    }
  }
`;

export const ContainerTitleDescription = styled.div`
  width: 80%;
  height: 100%;
  margin: 10px;
  padding-left: 10px;
  overflow-wrap: break-word;
  word-wrap: break-word;

  h3 {
    max-width: 100%;

    text-align: left;
    color: var(--grey-0);
    font-size: 16px;
    line-height: 22px;
    text-overflow: ellipsis;

    color: var(--primary);
  }
  span {
    font-weight: 600;

    max-width: 100%;

    font-size: 12px;
    font-style: italic;
    line-height: 20px;
    text-overflow: ellipsis;
  }
  p {
    max-width: 100%;
    font-size: 14px;
    margin-top: 10px;
    text-align: left;
    line-height: 18px;
    text-overflow: ellipsis;
    color: var(--grey-0);
  }
  @media (min-width: 900px) {
    h3 {
      font-size: 20px;
      line-height: 24px;
    }
    span {
      font-size: 14px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const ContainerFooter = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 30%;
  cursor: default;

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
  .post-date {
    color: var(--grey-1);
    font-size: 8px;
    line-height: 14px;
    font-style: oblique;
    @media (min-width: 900px) {
      font-size: 12px;
    }
  }
`;
