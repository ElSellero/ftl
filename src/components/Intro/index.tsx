import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import MiddleBlock from "../MiddleBlock";
import MiddleBlockHeadline from "../MiddleBlockHeadline";
import { ContentWrapper } from "./styled";

interface IntroProps {
    middleBlockHeadlineTitle: string;
    middleBlockTitle: string;
    middleBlockContent: string;
    middleBlockButton: string;
    id?: string;
  t: any;
}

const Intro = ({ middleBlockHeadlineTitle, middleBlockTitle, middleBlockContent, middleBlockButton, id, t }: IntroProps) => {
  
  return (
    <ContentWrapper id={id}>
        <MiddleBlockHeadline
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
