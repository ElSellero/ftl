import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { SvgIcon } from '../../common/SvgIcon';
import Container from '../../common/Container';
import {
  FooterSection,
  Title,
  Extra,
  LogoContainer,
  Para,
  Large,
  Chat,
  Empty,
  FooterContainer,
  Language,
  Label
} from './styles';

interface SocialLinkProps {
  href: string;
  src: string;
}

const Footer = ({ t }: any) => {
  

  const SocialLink = ({ href, src }: SocialLinkProps) => {
    return (
      <a
        href={href}
        target='_blank'
        rel='noopener noreferrer'
        key={src}
        aria-label={src}
      >
        <SvgIcon src={src} width='25px' height='25px' />
      </a>
    );
  };

  return (
    <>
      <FooterSection>
        <Container>
          <Row justify='space-between'>
            <Col lg={6} md={6} sm={24} xs={24}>
              <Language>{t('Contact')}</Language>
              <Para>{t(`Questions`)}</Para>
              <a href='mailto:info@elektroservice-breitnauer.de'>
                <Chat>{t(`WriteMail`)}</Chat>
              </a>
              <a href='tel:+49 170 4577579'>
                <Chat>+49 170 4577579</Chat>
              </a>
            </Col>
            <Col lg={6} md={6} sm={24} xs={24}>
              <Language>{t('Address')}</Language>
              <Para>Maximilian Breitnauer</Para>
              <Para>Auf der Linge 35</Para>
              <Para>79112 Freiburg im Breisgau</Para>
              <Empty></Empty>
            </Col>
            <Col lg={6} md={6} sm={24} xs={24}>
              <Title>{t('Policy')}</Title>
              <Large to='/impressum' left='true'>
                {t('Impressum')}
              </Large>
              <Large to='/datenschutz' left='true'>
                {t('Datenschutz')}
              </Large>
            </Col>
          </Row>
          <Empty />
          <Row justify='space-between'>
          </Row>
        </Container>
      </FooterSection>
      <Extra>
        <Container border={true}>
          <Row justify='space-between'>
            <Col lg={24} md={24} sm={24} xs={24}>
              <FooterContainer>
                <Para>{t(`RightsReserved`)}</Para>
              </FooterContainer>
            </Col>
          </Row>
        </Container>
      </Extra>
    </>
  );
};

export default withTranslation()(Footer);
