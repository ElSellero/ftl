import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';
import { Col, Row } from 'antd';
import { withTranslation } from 'react-i18next';
import { Button } from '../../common/Button';
import { Content, Empty, MiddleBlockSection, StyledHeadline } from './styles';

export interface MiddleBlockProps {
  title?: string;
  content?: string;
  button?: string;
  t?: any;
  isIntro?: boolean;
  id?: string;
}

const GoogleMapsMap = ({
  title,
  content,
  button,
  id,
  t,
  isIntro = false,
}: MiddleBlockProps) => {
  const position = { lat: 48.11519, lng: 7.79327 };

  return (
    <MiddleBlockSection isIntro={isIntro} id={id}>
      {title && <StyledHeadline>{title}</StyledHeadline>}
      <Empty />
      {content && <Content>{content}</Content>}
      <APIProvider apiKey={`${process.env.REACT_APP_GOOGLE_API}`}>
        <Map defaultCenter={position} defaultZoom={14}>
          <Marker position={position} />
        </Map>
      </APIProvider>
    </MiddleBlockSection>
  );
};

export default withTranslation()(GoogleMapsMap);
