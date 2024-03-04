import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { ContactProps } from './types';
import { Button } from '../../common/Button';
import Block from '../Block';
import Input from '../../common/Input';
import TextArea from '../../common/TextArea';
import { ContactContainer, FormGroup, ButtonContainer, Para, Empty } from './styles';
import { useState } from 'react';
import MailSent from '../MailSent';

const FORM_ENDPOINT =
  'https://public.herotofu.com/v1/51846a90-8f33-11ed-a003-6f0b76086b1c';

const Contact = ({ title, content, id, t }: ContactProps) => {
  const [mailAddress, setMailAddress] = useState('');
  const [isMailValid, setIsMailValid] = useState(false);
  const EMAIL_MAX_LENGTH = 80;

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (value: string) => {
    setMailAddress(value);
    checkEmail(value);
  };

  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  const checkEmail = (mailToCheck: string) => {
    const validRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (
      mailToCheck.match(validRegex) &&
      mailToCheck.length <= EMAIL_MAX_LENGTH
    ) {
      setIsMailValid(true);
    } else {
      setIsMailValid(false);
    }
  };

  if (submitted) {
    return (
      <>
        <MailSent
          title={t('MailSentTitle')}
          content={t('MailSentContent')}
          id='mailSent'
        />
      </>
    );
  }

  return (
    <ContactContainer id={id}>
      <Row justify='space-between' align='middle'>
        <Col lg={12} md={11} sm={24} xs={24}>
          <Block title={title} content={content} />
        </Col>
        <Col lg={12} md={12} sm={24} xs={24}>
          <FormGroup
            autoComplete='on'
            action={FORM_ENDPOINT}
            onSubmit={handleSubmit}
            method='POST'
            target='_blank'
          >
            <Col span={24}>
              <Input
                type='text'
                name='name'
                placeholder='Your Name'
                required
              />
            </Col>
            <Col span={24}>
              <Input
                type='text'
                name='email'
                placeholder='Your Email'
                value={mailAddress || ''}
                onChange={(e) => handleChange(e.target.value)}
                required
              />
            </Col>
            <Col span={24}>
              {!isMailValid ? (
                <Para>{t('MailValidationError')}</Para>
              ) : (
                <Empty></Empty>
              )}
            </Col>
            <Col span={24}>
              <TextArea placeholder='Your Message' name='message' required />
            </Col>
            <ButtonContainer>
              <Button type='submit' name='submit' disabled={!isMailValid}>
                {t('Submit')}
              </Button>
            </ButtonContainer>
          </FormGroup>
        </Col>
      </Row>
    </ContactContainer>
  );
};

export default withTranslation()(Contact);
