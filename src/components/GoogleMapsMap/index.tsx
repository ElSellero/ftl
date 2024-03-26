import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Button } from "../../common/Button";
import { MiddleBlockSection } from "./styles";
import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';

export interface MiddleBlockProps {
  title?: string;
  content?: string;
  button?: string;
  t?: any;
  isIntro?: boolean;
  id?: string;
}

const GoogleMapsMap = ({ title, content, button, id, t, isIntro = false }: MiddleBlockProps) => {
    const position = {lat: 48.115190, lng: 7.793270};

    return (
      <MiddleBlockSection isIntro={isIntro} id={id}>
        <APIProvider apiKey={`${process.env.REACT_APP_GOOGLE_API}`}>
          <Map defaultCenter={position} defaultZoom={14}>
            <Marker position={position} />
          </Map>
        </APIProvider>
      </MiddleBlockSection>
    );
};

export default withTranslation()(GoogleMapsMap);
