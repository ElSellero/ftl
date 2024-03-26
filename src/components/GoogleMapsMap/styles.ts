import styled from "styled-components";
import { MiddleBlockProps } from ".";

export const MiddleBlockSection = styled("section")<MiddleBlockProps>`
  position: relative;
  padding: 4rem 0 6.5rem;
  text-align: center;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(2px);
  height: 700px;

  @media screen and (max-width: 1024px) {
    padding: 3.5rem 0 3rem;
  }
`;