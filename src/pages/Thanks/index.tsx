import { lazy } from 'react';
import { useTranslation } from 'react-i18next';

const MailSent = lazy(() => import('../../components/MailSent'));
const Container = lazy(() => import('../../common/Container'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));

const Thanks = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <ScrollToTop />
      <MailSent
        title={t('MailSentTitle')}
        content={t('MailSentContent')}
        button={t('CloseTab')}
        id='mailSent'
      />
    </Container>
  );
};

export default Thanks;
