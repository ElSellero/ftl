import styled from "styled-components";
import { MiddleBlockProps } from ".";

export const MiddleBlockSection = styled("section")<MiddleBlockProps>`
  position: relative;
  padding: 7.5rem 0 3rem;
  text-align: center;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(2px);

  @media screen and (max-width: 1024px) {
    padding: 3.5rem 0 3rem;
  }
`;

export const Content = styled("p")<MiddleBlockProps>`
  font-style: italic;
  padding: 0.75rem 0 0.75rem;
  color: #282828;
`;

export const ContentWrapper = styled("div")`
  max-width: 1000px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const StyledHeadline = styled("h6")<MiddleBlockProps>`
  color: #282828;
  font-size: 1.5rem;
`;