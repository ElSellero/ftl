import { lazy } from 'react';
import AboutContentDe from '../../content/AboutContentDe.json';
import { useTranslation } from 'react-i18next';
import Intro from '../../components/Intro';
import CookieNoticeReact from '../../components/CookieNotice';

const Contact = lazy(() => import('../../components/ContactForm'));
const Container = lazy(() => import('../../common/Container'));
const IntroContainer = lazy(() => import('../../common/IntroContainer'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));
const ContentBlock = lazy(() => import('../../components/ContentBlock'));

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <IntroContainer>
        <Intro
          middleBlockHeadlineTitle={'FTL - Freiburger Transport Logistik'}
          middleBlockTitle={t('HelloTitle')}
          id='hello'
        />
      </IntroContainer>
      <Container>
        <CookieNoticeReact
          id='CookieConsent'
          acceptButtonLabel={t('AcceptButtonLabel')}
          declineButtonLabel={t('DeclineButtonLabel')}
          readMoreLabel={t('ReadMoreLabel')}
          descriptionLabel={t('DescriptionLabel')}
          titleLabel={t('TitleLabel')}
        />
        <ScrollToTop />
          <ContentBlock
          type='left'
          title={t('AboutTitle')}
          content={t('AboutContent')}
          section={AboutContentDe.section}
          icon='../png/stock3.png'
          iconType='png'
          id='about'
          size='100%'
          />
        <ContentBlock
          type='right'
          title={t('IntroTitle')}
          content={t('IntroContent')}
          icon='../png/stock4.png'
          id='motivation'
          size='100%'
        />
        
        {/* <MiddleBlock
          title={t('GettingInterestTitle')}
          content={t('GettingInterestContent')}
          button={t('GettingInterestButton')}
          id='gettingInterest'
        /> */}
        <ContentBlock
          type='right'
          title={t('ServicesTitle1')}
          content={t('ServicesContent1')}
          icon='smokeDetector.png'
          iconType='png'
          id='services1'
          size='100%'
        />
        <ContentBlock
          type='right'
          title={t('ServicesTitle2')}
          content={t('ServicesContent2')}
          icon='industrialPowerOutlet.png'
          iconType='png'
          size='100%'
          id='services2'
        />
        <ContentBlock
          type='right'
          title={t('CareerTitle')}
          content={t('CareerContent')}
          icon='careerStock.png'
          iconType='png'
          id='career'
          size='100%'
        />
        <Contact
          title={t('ContactTitle')}
          content={t('ContactContent')}
          id='contact'
        />
      </Container>
    </>

  );
};

export default Home;
