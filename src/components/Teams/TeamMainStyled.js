import styled from "styled-components";

export const DisplayList = styled.div`
  display: flex;
  background: #010606;
`;

export const DisplayH1 = styled.h1`
  width: 100%;
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 64px;
  text-align: center;
  padding: 5px;
  margin: 0 auto;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
  @media screen and (max-width: 330px) {
    font-size: 1.5rem;
    padding: 5px auto 25px auto !important;
  }
`;

export const DisplayListEvent = styled.div`
  display: flex;
  background: #20dea0;
`;

export const Teamgrid = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 2rem;
  margin: auto;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 710px) {
    grid-template-columns: repeat(1, 1fr);
  }

  
`;
