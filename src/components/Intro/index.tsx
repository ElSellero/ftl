import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import MiddleBlock from "../MiddleBlock";
import MiddleBlockHeadline, { MiddleBlockFTL } from "../MiddleBlockHeadline";
import { ContentWrapper } from "./styled";

interface IntroProps {
    middleBlockHeadlineTitle: string;
    middleBlockTitle: string;
    middleBlockContent?: string;
    middleBlockButton?: string;
    id?: string;
  t: any;
}

const Intro = ({ middleBlockHeadlineTitle, middleBlockTitle, middleBlockContent, middleBlockButton, id }: IntroProps) => {
  
  return (
    <ContentWrapper id={id}>
        <MiddleBlockFTL
            title={middleBlockHeadlineTitle}
        />
        <MiddleBlock
            title={middleBlockTitle}
            content={middleBlockContent}
            button={middleBlockButton}
            isIntro
        />
    </ContentWrapper>
  );
};

export default withTranslation()(Intro);
