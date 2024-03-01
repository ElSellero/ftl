import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { Slide } from 'react-awesome-reveal';
import {
  MailSentSection,
  Content,
  ContentWrapper,
  StyledHeadline,
} from './styles';
import { Button } from '../../common/Button';

export interface MailSentProps {
  title?: string;
  content?: string;
  button?: string;
  t?: any;
  id?: string;
}

const MailSent = ({ title, content, button, id, t }: MailSentProps) => {
  const closeTab = () => {
    window.opener = null;
    window.open('', '_self');
    window.close();
  };

  return (
    <MailSentSection id={id}>
      <Slide direction='up'>
        <Row justify='center' align='middle'>
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <StyledHeadline>{t(title)}</StyledHeadline>
              <Content>{t(content)}</Content>
              {button && <Button onClick={closeTab}>{button}</Button>}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MailSentSection>
  );
};

export default withTranslation()(MailSent);
