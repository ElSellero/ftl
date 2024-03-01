import styled from "styled-components";
import { ContentBlockProps } from "../types";

export const RightBlockContainer = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-bottom: 4rem;
  }
`;

export const ButtonWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;

  @media screen and (min-width: 1024px) {
    max-width: 80%;
  }

  button:last-child {
    margin-left: 20px;
  }
`;

export const IconWrapper = styled("div")<ContentBlockProps>`
  display: flex;
  justify-content: flex-start;
  -webkit-box-shadow: ${({noShadow}) => noShadow ? "none" : "8px 8px 13px 1px rgba(84,84,84,0.88)"}; 
  box-shadow: ${({noShadow}) => noShadow ? "none" : "8px 8px 13px 1px rgba(84,84,84,0.88)"};
  @media only screen and (max-width: 575px) {
    justify-content: center;
  }
`

export const Empty = styled("div")`
  position: relative;
  height: 2rem;
`;