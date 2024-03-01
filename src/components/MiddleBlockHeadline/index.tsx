import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { MiddleBlockSection, StyledHeadline } from "./styles";

interface MiddleBlockHeadlineProps {
  title: string;
  id?: string;
}

const MiddleBlock = ({ title, id }: MiddleBlockHeadlineProps) => {
  
  return (
    <MiddleBlockSection id={id}>
        <Row justify="center" align="middle">
            <Col lg={24} md={24} sm={24} xs={24}>
              <StyledHeadline>{title}</StyledHeadline>
            </Col>
        </Row>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
