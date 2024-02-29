import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1%;
  padding-top: 90px;
  @media (max-width: 768px) {
    padding-top: 45px;
    padding-inline: 5%;
  }
`;
