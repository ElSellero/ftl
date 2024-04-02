import { lazy, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ListObject } from '../../components/ContentBlock/types';
import CookieNoticeReact from '../../components/CookieNotice';
import GoogleMapsMap from '../../components/GoogleMapsMap';
import Intro from '../../components/Intro';
import ImportExportContentDe from '../../content/ImportExportContentDe.json';

const Contact = lazy(() => import('../../components/ContactForm'));
const Container = lazy(() => import('../../common/Container'));
const IntroContainer = lazy(() => import('../../common/IntroContainer'));
const ScrollToTop = lazy(() => import('../../common/ScrollToTop'));
const ContentBlock = lazy(() => import('../../components/ContentBlock'));

const Home = () => {
  const { t } = useTranslation();
  const [consent, setConsent] = useState(false);

  const listObject: ListObject[] = [
    {
      id: '1',
      title: 'November 2016',
      content:
        'Bewilligung als zugelassener Versender durch das Hauptzollamt Lörrach',
      type: 'ListObject',
    },
    {
      id: '2',
      title: 'Juli 2014',
      content:
        'Erteilung eines Zertifikates Zollmanager IHK durch die IHK Hochrhein-Bodensee',
      type: 'ListObject',
    },
    {
      id: '3',
      title: 'August 2013',
      content:
        'Erteilung eines AEO-Zertifikates durch das Hauptzollamt Lörrach',
      type: 'ListObject',
    },
    {
      id: '4',
      title: 'Juli 2013',
      content: 'Erteilung einer Postlizenz gemäß § 6 PostG',
      type: 'ListObject',
    },
    {
      id: '5',
      title: 'Januar 2012',
      content:
        'Verlegung der Administrative in die Büroräume unserer Lageranschrift in Teningen',
      type: 'ListObject',
    },
    {
      id: '6',
      title: 'September 2011',
      content: 'Inbetriebnahme der Lagerräumlichkeiten in Teningen',
      type: 'ListObject',
    },
    {
      id: '7',
      title: 'Dezember 2010',
      content: 'Bewilligung eines laufenden Zahlungsaufschubes (Aufschubkonto)',
      type: 'ListObject',
    },
    {
      id: '8',
      title: 'Oktober 2010',
      content:
        'Oktober 2010 – Mitgliedschaft in einem europaweitem Kurierverbund',
      type: 'ListObject',
    },
    {
      id: '9',
      title: 'September 2010',
      content: 'Firmengründung',
      type: 'ListObject',
    },
  ];

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
          consentChanged={(consentState) => setConsent(consentState)}
        />
        <ScrollToTop />
        <ContentBlock
          type='right'
          title={t('AboutTitle')}
          content={t('IntroContent')}
          icon='../png/stock4.png'
          id='motivation'
          size='100%'
        />
        <ContentBlock
          type='left'
          title={t('Firmengeschichte')}
          content={t('')}
          icon='../png/stock3.png'
          iconType='png'
          id='about'
          size='100%'
          isList={listObject}
        />
        <GoogleMapsMap title={t('Standort')} cookieConsent={consent} />
        {/* <MiddleBlock
          title={t('GettingInterestTitle')}
          content={t('GettingInterestContent')}
          button={t('GettingInterestButton')}
          id='gettingInterest'
        /> 
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
        */}
      </Container>
    </>
  );
};

export default Home;
