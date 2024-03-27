import { MenuOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderSection = styled('header')`
  display: flex;
  padding: 1rem 0rem;

  .ant-row-space-evenly {
    align-items: center;
    text-align: center;
    padding-top: 1.5rem;
  }
`;

export const Empty = styled('div')`
  position: relative;
  height: 2rem;
`;

export const NavigationWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 991px) {
    width: 95%;
  }
  @media only screen and (max-width: 529px) {
    width: 90%;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const MenuWrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 991px) {
    flex-direction: column;
  }
`;

export const NavLink = styled('div')`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled('div')`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 411px) {
    width: 150px;
  }

  @media only screen and (max-width: 320px) {
    width: 118px;
  }
`;

export const ContactWrapper = styled('div')<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? '100%' : '110px')};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled('div')`
  @media only screen and (max-width: 991px) {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  display: none;

  svg {
    fill: #202124;
  }
`;

export const NotHidden = styled('div')`
  @media only screen and (max-width: 991px) {
    display: none;
  }
`;

export const Menu = styled('h5')`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: #282828;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
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

export const StyledButtonLink = styled(Link)`
  font-size: 1rem;
  min-width: 80px;
  color: #282828;
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;
  display: inline-block;
  text-align: center;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled('span')`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
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
