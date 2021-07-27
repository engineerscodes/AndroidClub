import styled from "styled-components";

export const Teamgrids = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 300px);
  grid-gap: 2rem;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin: auto;
  @media screen and (max-width: 1350px) {
    grid-template-columns: repeat(3, 300px);
  }

  @media screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 300px);
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: repeat(1, 300px);
  }

  
`;
