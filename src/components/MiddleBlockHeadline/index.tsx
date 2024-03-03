import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { MiddleBlockSection, StyledHeadlineWhite, StyledHeadlineBlue, StyledHeadlineOrange, StyledHeadlineBlack, StyledHeadlineBlueOrange } from "./styles";

interface MiddleBlockHeadlineProps {
  title: string;
  id?: string;
}

const MiddleBlock = ({ title, id }: MiddleBlockHeadlineProps) => {
  
  return (
    <MiddleBlockSection id={id}>
        <Row justify="center" align="middle">
            <Col lg={24} md={24} sm={24} xs={24}>
              <StyledHeadlineWhite>{title}</StyledHeadlineWhite>
            </Col>
        </Row>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);

interface MiddleBlockHeadlineProps {
  id?: string;
}

export const MiddleBlockFTL = ({ title, id }: MiddleBlockHeadlineProps) => {
  
  return (
    <MiddleBlockSection id={id}>
        <Row justify="center" align="middle">
            <Col lg={24} md={24} sm={24} xs={24}>
              <StyledHeadlineBlue inline>{'FTL'}</StyledHeadlineBlue>
              <StyledHeadlineBlack inline>&nbsp;{'-'}&nbsp;</StyledHeadlineBlack>
              <StyledHeadlineBlueOrange inline>{'Freiburger'}&nbsp;</StyledHeadlineBlueOrange>
              <StyledHeadlineBlueOrange inline>{'Transport'}&nbsp;</StyledHeadlineBlueOrange>
              <StyledHeadlineBlueOrange inline>{'Logistik'}&nbsp;</StyledHeadlineBlueOrange>
            </Col>
        </Row>
    </MiddleBlockSection>
  );
};