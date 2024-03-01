import React from 'react';
import { CookieNotice } from 'react-cookienotice';
import 'react-cookienotice/dist/style.css';
import { withTranslation } from 'react-i18next';
import { Positioner } from './styles';

export interface CookieNoticeReactProps {
  acceptButtonLabel?: string;
  declineButtonLabel?: string;
  titleLabel?: string;
  descriptionLabel?: string;
  readMoreLabel?: string;
  t?: any;
  id?: string;
}

const CookieNoticeReact = ({
  t,
  acceptButtonLabel,
  declineButtonLabel,
  titleLabel,
  descriptionLabel,
  id,
}: CookieNoticeReactProps) => {
  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
  };
  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
  };
  return (
    <Positioner id={id}>
      <CookieNotice
        acceptAllButtonLabel={acceptButtonLabel}
        declineAllButtonLabel={declineButtonLabel}
        titleLabel={t(titleLabel)}
        descriptionLabel={t(descriptionLabel)}
        onAcceptButtonClick={handleAccept}
        onDeclineAllButtonClick={handleDecline}
        cookieExpiration={30}
        cookieName={'cookieConsent'}
      />
    </Positioner>
  );
};

export default withTranslation()(CookieNoticeReact);
