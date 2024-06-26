import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FooterSection = styled('footer')`
  background: rgb(241, 242, 243);
  padding: 2.5rem 0;
`;

export const Title = styled('h4')`
  font-size: 22px;
  text-transform: capitalize;
  color: #282828;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const NavLink = styled(Link)`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;

export const StyledLink = styled(Link)`
  font-size: 1rem;
  color: #282828;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;
  display: inline-block;
  text-align: center;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Span = styled('span')`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: #ff6633;
    text-underline-position: under;
    text-decoration: #ff6633 underline;
  }
`;

export const Extra = styled('section')`
  background: rgb(241, 242, 243);
  display: flex;
  justify-content: center;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 2rem;
`;

export const LogoContainer = styled('div')`
  display: flex;
  position: relative;
`;

export const Para = styled('div')`
  color: #282828;
  font-size: 14px;
`;

export const ParaSpan = styled('span')`
  color: #282828;
  font-size: 14px;
`;

export const Large = styled(Link)<any>`
  font-size: 16px;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: #ff6633;
    text-underline-position: under;
    text-decoration: #ff6633 underline;
  }
`;

export const LargeAnchor = styled('a')`
  font-size: 16px;
  color: #000;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-transform: capitalize;
  line-height: 24px;
  display: block;
  margin-bottom: 0.625rem;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: #ff6633;
    text-underline-position: under;
    text-decoration: #ff6633 underline;
  }
`;

export const SmallAnchor = styled('a')`
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  display: block;
  transition: all 0.3s ease-in-out;
  max-width: max-content;

  &:hover {
    color: #ff6633;
    text-underline-position: under;
    text-decoration: #ff6633 underline;
  }
`;

export const Chat = styled('p')`
  color: #282828;
  max-width: fit-content;
  border-bottom: 1px solid #282828;
  cursor: pointer;
  margin-top: 1rem;
  transition: all 0.3s ease-in-out;
  font-size: medium;
  &:hover {
    border-bottom: 1px solid #ff6633;
    color: #ff6633;
  }
`;

export const Empty = styled('div')`
  position: relative;
  height: 2rem;
`;

export const FooterContainer = styled('div')`
  padding: 1rem 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  transition: all 0.1s ease-in-out;

  @media screen and (max-width: 769px) {
    width: auto;
  }
`;

export const Language = styled('h4')`
  font-size: 22px;
  text-transform: capitalize;
  color: #282828;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Label = styled('label')`
  font-size: 22px;
  text-transform: capitalize;
  color: #282828;
  display: block;
  margin-bottom: 2rem;
  font-family: 'Lunasima Bold', serif;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
    margin-bottom: 1rem;
  }
`;

export const LanguageSwitch = styled('div')<any>`
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 85px;
`;
