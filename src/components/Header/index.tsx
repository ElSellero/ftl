import { Col, Drawer, Row } from 'antd';
import i18n from 'i18next';
import { useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../../common/Button';
import Container from '../../common/Container';
import { SvgIcon } from '../../common/SvgIcon';
import {
  Burger,
  CustomNavLinkSmall,
  Empty,
  HeaderSection,
  Label,
  LanguageSwitch,
  LanguageSwitchContainer,
  LogoContainer,
  Menu,
  MenuWrapper,
  NavigationWrapper,
  NotHidden,
  Outline,
  Span,
  StyledLink,
} from './styles';

const Header = ({ t }: any) => {
  const [isVisible, setIsVisible] = useState(false);
  const [innerWidth, setInnerWidth] = useState(window.innerWidth < 991);

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth < 991);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };

  const showDrawer = () => {
    if (innerWidth) {
      setIsVisible(!isVisible);
      if (isVisible) {
        setIsVisible(false);
      }
    }
  };

  const onClose = () => {
    if (innerWidth) {
      setIsVisible(false);
    }
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: 'smooth',
      });
      setIsVisible(false);
    };
    return (
      <MenuWrapper>
        <StyledLink key={'/home'} href={'/home'} onClick={onClose}>
          <Span>Über uns</Span>
        </StyledLink>
        <StyledLink key={'/customs'} href={'/customs'} onClick={onClose}>
          <Span>Zollmanagement</Span>
        </StyledLink>
        <StyledLink
          key={'/importexport'}
          href={'/importexport'}
          onClick={onClose}
        >
          <Span>Im- und Export</Span>
        </StyledLink>
        <StyledLink key={'/direct'} href={'/direct'} onClick={onClose}>
          <Span>Direktfahrten</Span>
        </StyledLink>
        <StyledLink key={'/warehouse'} href={'/warehouse'} onClick={onClose}>
          <Span>Lagerlogistik</Span>
        </StyledLink>
      </MenuWrapper>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <LogoContainer href='/' aria-label='homepage'>
          <SvgIcon src='logo.svg' width='480px' height='150px' />
        </LogoContainer>
        <Row justify='space-evenly'>
          <NavigationWrapper>
            <NotHidden>
              <MenuItem />
            </NotHidden>
          </NavigationWrapper>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} open={isVisible} onClose={onClose}>
          <Col style={{ marginBottom: '2.5rem' }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>{t('Menu')}</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
