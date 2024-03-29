import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ButtonLink = styled(LinkR)`
  border-radius: 50px;
  background: #01bf71;
  white-space: nowrap;
  padding: 10px 22px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  text-transform: uppercase;
  align-self: center;
  margin: 50px auto;
  margin-bottom: 50px;
  visibility: visible !important;
  width: 46px !important;
  height: 20px !important;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
