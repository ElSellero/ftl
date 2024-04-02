import styled from 'styled-components';
import { MiddleBlockProps } from '.';

export const MiddleBlockSection = styled('section')<MiddleBlockProps>`
  position: relative;
  padding: 4rem 0 6.5rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  backdrop-filter: blur(2px);
  height: 700px;

  @media screen and (max-width: 1024px) {
    padding: 3.5rem 0 3rem;
  }
`;

export const StyledHeadline = styled.h6`
  color: #000080;
  text-decoration: underline;
  text-decoration-color: #ff6633;
`;

export const Content = styled('p')`
  margin: 1.5rem 0 2rem 0;
`;

export const Empty = styled('div')`
  position: relative;
  height: 2rem;
`;

export const LogoContainer = styled('a')`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const MinPara = styled('p')`
  font-size: 14px;
`;
