import { Col, Row } from 'antd';
import { withTranslation } from 'react-i18next';
import { Button } from '../../common/Button';
import {
  Content,
  ContentWrapper,
  MiddleBlockSection,
  StyledHeadline,
} from './styles';

export interface MiddleBlockProps {
  title?: string;
  content?: string;
  button?: string;
  t?: any;
  isIntro?: boolean;
  isMap?: boolean;
  id?: string;
  cookieSetTrue?: (consent: boolean) => void;
}

const MiddleBlock = ({
  title,
  content,
  button,
  id,
  t,
  isMap,
  isIntro = false,
  cookieSetTrue,
}: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: 'smooth',
    });
  };

  const setCookie = (cname: string, cvalue: string, exdays: number): void => {
    console.log('KLICK');
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    const expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
    if (cookieSetTrue) {
      cookieSetTrue(true);
    }
  };

  return (
    <MiddleBlockSection isIntro={isIntro} id={id}>
      {isIntro && (
        <Row justify='center' align='middle'>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <StyledHeadline isIntro={isIntro}>{t(title)}</StyledHeadline>
              <Content isIntro={isIntro}>{t(content)}</Content>
              {button && (
                <Button name='submit' onClick={() => scrollTo('about')}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      )}
      {isMap && (
        <Row justify='center' align='middle'>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <StyledHeadline>{t(title)}</StyledHeadline>
              <Content>{t(content)}</Content>
              {button && (
                <Button
                  name='submit'
                  onClick={() => setCookie('cookieConsent', 'true', 30)}
                >
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      )}
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
