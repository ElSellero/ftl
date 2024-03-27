import { Col, Drawer, Row } from 'antd';
import i18n from 'i18next';
import { useState } from 'react';
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
  const location = useLocation();
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  const showDrawer = () => {
    setIsVisible(!isVisible);
  };

  const onClose = () => {
    setIsVisible(!isVisible);
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
        <StyledLink to={'/home'}>
          <Span>Über uns</Span>
        </StyledLink>
        <StyledLink to={'/customs'}>
          <Span>Zollmanagement</Span>
        </StyledLink>
        <StyledLink to={'/importexport'}>
          <Span>Im- und Export</Span>
        </StyledLink>
        <StyledLink to={'/direct'}>
          <Span>Direktfahrten</Span>
        </StyledLink>
        <StyledLink to={'/warehouse'}>
          <Span>Lagerlogistik</Span>
        </StyledLink>
        {/* <CustomNavLinkSmall onClick={() => scrollTo('about')}>
          <Span>{t('About')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo('motivation')}>
          <Span>{t('Motivation')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo('services1')}>
          <Span>{t('Services')}</Span>
        </CustomNavLinkSmall>
        <CustomNavLinkSmall onClick={() => scrollTo('career')}>
          <Span>{t('Career')}</Span>
        </CustomNavLinkSmall> */}
        {/* <CustomNavLinkSmall
          style={{ width: '180px' }}
          onClick={() => scrollTo('contact')}
        >
          <Span>
            <Button>{t('Contact')}</Button>
          </Span>
        </CustomNavLinkSmall> */}

        {/* <StyledLink to={'/contact'}>
          <Button fixedWidth={'140px'}>{t('Contact')}</Button>
        </StyledLink> */}

        {/* <Empty />
        <LanguageSwitchContainer>
          <LanguageSwitch onClick={() => handleChange('de')}>
            <SvgIcon
              src='germany.svg'
              aria-label='homepage'
              width='30px'
              height='30px'
            />
          </LanguageSwitch>
          <LanguageSwitch onClick={() => handleChange('en')}>
            <SvgIcon
              src='united-kingdom.svg'
              aria-label='homepage'
              width='30px'
              height='30px'
            />
          </LanguageSwitch>
          <LanguageSwitch onClick={() => handleChange('es')}>
                  <SvgIcon
                    src='spain.svg'
                    aria-label='homepage'
                    width='30px'
                    height='30px'
                  />
                </LanguageSwitch> 
        </LanguageSwitchContainer> */}
      </MenuWrapper>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row>
          <Col span={24}>
            <LogoContainer to='/' aria-label='homepage'>
              <SvgIcon src='logo.svg' width='360px' height='120px' />
            </LogoContainer>
          </Col>
        </Row>
        <Row justify='space-evenly'>
          <NavigationWrapper>
            {location.pathname !== '/datenschutz' &&
              location.pathname !== '/thanks' && (
                <NotHidden>
                  <MenuItem />
                </NotHidden>
              )}
          </NavigationWrapper>
          {location.pathname !== '/datenschutz' &&
            location.pathname !== '/thanks' && (
              <Burger onClick={showDrawer}>
                <Outline />
              </Burger>
            )}
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
