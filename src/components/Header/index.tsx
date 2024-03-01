import { useState } from 'react';
import { Row, Col, Drawer } from 'antd';
import { withTranslation } from 'react-i18next';
import Container from '../../common/Container';
import { Button } from '../../common/Button';
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
  MenuWrapper,
  NavigationWrapper,
  LanguageSwitchContainer,
  LanguageSwitch,
  Empty,
} from './styles';
import { SvgIcon } from '../../common/SvgIcon';
import { useLocation } from 'react-router-dom';
import i18n from 'i18next';

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);
  const location = useLocation();
  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
  };
  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    const scrollTo = (id: string) => {
      const element = document.getElementById(id) as HTMLDivElement;
      element.scrollIntoView({
        behavior: 'smooth',
      });
      setVisibility(false);
    };
    return (
      <MenuWrapper>
        <CustomNavLinkSmall onClick={() => scrollTo('about')}>
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
        </CustomNavLinkSmall>
        <CustomNavLinkSmall
          style={{ width: '180px' }}
          onClick={() => scrollTo('contact')}
        >
          <Span>
            <Button>{t('Contact')}</Button>
          </Span>
        </CustomNavLinkSmall>
        <Empty />
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
          {/* <LanguageSwitch onClick={() => handleChange('es')}>
                  <SvgIcon
                    src='spain.svg'
                    aria-label='homepage'
                    width='30px'
                    height='30px'
                  />
                </LanguageSwitch> */}
        </LanguageSwitchContainer>
      </MenuWrapper>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify='space-evenly'>
          <NavigationWrapper>
            <LogoContainer to='/' aria-label='homepage'>
              <SvgIcon
                src='logoWithCircle2Svg.svg'
                width='120px'
                height='120px'
              />
            </LogoContainer>
            {location.pathname !== '/datenschutz' &&
              location.pathname !== '/impressum' &&
              location.pathname !== '/thanks' && (
                <NotHidden>
                  <MenuItem />
                </NotHidden>
              )}
          </NavigationWrapper>
          {location.pathname !== '/datenschutz' &&
            location.pathname !== '/impressum' &&
            location.pathname !== '/thanks' && (
              <Burger onClick={showDrawer}>
                <Outline />
              </Burger>
            )}
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
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
