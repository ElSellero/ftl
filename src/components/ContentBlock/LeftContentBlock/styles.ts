import styled from "styled-components";
import { ContentBlockProps } from "../types";

export const LeftContentSection = styled("section")`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 2rem 0 4rem;
  }
`;

export const Content = styled("p")`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled("div")`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 575px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled("div")`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled("h6")`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: "Motiva Sans Light", sans-serif;
`;

export const MinPara = styled("p")`
  font-size: 13px;
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