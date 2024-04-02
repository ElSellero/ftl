import {
  APIProvider,
  InfoWindow,
  Map,
  Marker,
  useMarkerRef,
} from '@vis.gl/react-google-maps';
import { Col, Row } from 'antd';
import { useEffect, useState } from 'react';
import { withTranslation } from 'react-i18next';
import { Button } from '../../common/Button';
import { SvgIcon } from '../../common/SvgIcon';
import GoogleMapsMapPlaceholder from '../GoogleMapsMapPlaceholder';
import {
  Content,
  Empty,
  LogoContainer,
  MiddleBlockSection,
  MinPara,
  StyledHeadline,
} from './styles';

export interface MiddleBlockProps {
  title?: string;
  content?: string;
  button?: string;
  t?: any;
  isIntro?: boolean;
  id?: string;
  cookieConsent?: boolean;
}

const GoogleMapsMap = ({
  title,
  content,
  button,
  id,
  t,
  isIntro = false,
  cookieConsent,
}: MiddleBlockProps) => {
  const position = { lat: 48.11519, lng: 7.79327 };
  const [markerRef, marker] = useMarkerRef();
  const [showMaps, setShowMaps] = useState(false);

  const getCookie = (cname: string): string => {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');

    for (const c of ca) {
      let cookie = c.trim();
      if (cookie.startsWith(name)) {
        return cookie.substring(name.length);
      }
    }

    return '';
  };

  useEffect(() => {
    console.log('cookieConsent', cookieConsent);
    if (getCookie('cookieConsent') === 'true') {
      console.log('isttrue', getCookie('cookieConsent') === 'true');
      setShowMaps(true);
    }
  }, [cookieConsent, showMaps]);

  const handleCookieSet = () => {
    setShowMaps(true);
  };

  return (
    <MiddleBlockSection isIntro={isIntro} id={id}>
      {title && <StyledHeadline>{title}</StyledHeadline>}
      <Empty />
      {content && <Content>{content}</Content>}
      {!showMaps ? (
        <GoogleMapsMapPlaceholder
          middleBlockHeadlineTitle={''}
          middleBlockTitle={''}
          middleBlockContent='Google Maps wurde aufgrund Ihrer Privatsphäre-Einstellungen blockiert.'
          middleBlockButton='Akzeptieren'
          id='noConsent'
          cookieSetTrue={handleCookieSet}
        />
      ) : (
        <APIProvider apiKey={`${process.env.REACT_APP_GOOGLE_API}`}>
          <Map zoom={15} center={position}>
            <Marker ref={markerRef} position={position} />
            <InfoWindow anchor={marker}>
              <LogoContainer href='/' aria-label='homepage'>
                <SvgIcon src='logo.svg' width='240px' height='75px' />
              </LogoContainer>
              <MinPara>Carl-Zeiss-Straße 7</MinPara>
              <MinPara>DE-79331 Teningen</MinPara>
            </InfoWindow>
          </Map>
        </APIProvider>
      )}
    </MiddleBlockSection>
  );
};

export default withTranslation()(GoogleMapsMap);
