import styled from 'styled-components';
import { ContentBlockProps } from '../types';

export const RightBlockContainer = styled('section')`
  position: relative;
  padding: 10rem 0 8rem;

  @media only screen and (max-width: 1024px) {
    padding: 8rem 0 6rem;
  }

  @media only screen and (max-width: 768px) {
    padding: 4rem 0 3rem;
  }
`;

export const Content = styled('p')`
  margin: 1.5rem 0 2rem 0;
`;

export const ContentWrapper = styled('div')`
  position: relative;
  max-width: 540px;

  @media only screen and (max-width: 991px) {
    padding-top: 4rem;
  }
`;

export const ServiceWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
`;

export const MinTitle = styled('h6')`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #000;
  font-family: 'Lunasima Light', sans-serif;
`;

export const MinSpecialTitle = styled('h6')`
  font-size: 15px;
  line-height: 1rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
  color: #ff6633;
  :first-letter {
    color: #000080;
  }
  font-family: 'Lunasima Bold', sans-serif;
`;

export const MinPara = styled('p')`
  font-size: 13px;
`;

export const ButtonWrapper = styled('div')`
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

export const IconWrapper = styled('div')<ContentBlockProps>`
  display: flex;
  justify-content: flex-end;
  -webkit-box-shadow: ${({ noShadow }) =>
    noShadow ? 'none' : '8px 8px 13px 1px rgba(84,84,84,0.88)'};
  box-shadow: ${({ noShadow }) =>
    noShadow ? 'none' : '8px 8px 13px 1px rgba(84,84,84,0.88)'};
  @media only screen and (max-width: 991px) {
    justify-content: center;
  }
`;

export const Empty = styled('div')`
  position: relative;
  height: 2rem;
`;

export const StyledHeadline = styled.h6`
  word-break: break-all;
  color: #000080;
  text-decoration: underline;
  text-decoration-color: #ff6633;
`;
