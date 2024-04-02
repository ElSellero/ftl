import { Col, Row } from 'antd';
import { withTranslation } from 'react-i18next';
import MiddleBlock from '../MiddleBlock';
import MiddleBlockHeadline, { MiddleBlockFTL } from '../MiddleBlockHeadline';
import { BackgroundImage, ContentOverlay, ContentWrapper } from './styled';

interface IntroProps {
  middleBlockHeadlineTitle: string;
  middleBlockTitle: string;
  middleBlockContent?: string;
  middleBlockButton?: string;
  id?: string;
  cookieSetTrue?: (consent:boolean) => void;
  t: any;
}

const GoogleMapsMapPlaceholder = ({
  middleBlockHeadlineTitle,
  middleBlockTitle,
  middleBlockContent,
  middleBlockButton,
  id,
  cookieSetTrue
}: IntroProps) => {
  return (
    <ContentWrapper id={id}>
      <BackgroundImage />
      <ContentOverlay>
        <MiddleBlock
          title={middleBlockTitle}
          content={middleBlockContent}
          button={middleBlockButton}
          cookieSetTrue={cookieSetTrue}
          isMap
        />
      </ContentOverlay>
    </ContentWrapper>
  );
};

export default withTranslation()(GoogleMapsMapPlaceholder);
