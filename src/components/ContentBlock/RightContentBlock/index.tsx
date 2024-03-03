import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Button } from "../../../common/Button";
import { ContentBlockProps } from "../types";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  IconWrapper,
  Empty,
  StyledHeadline
} from "./styles";
import { SvgIcon } from "../../../common/SvgIcon";
import { PngIcon } from "../../../common/PngIcon";

const RightBlock = ({
  title,
  content,
  button,
  icon,
  iconType = "svg",
  noShadow = false,
  t,
  id,
  size = "100%"
}: ContentBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <RightBlockContainer>
      <Row justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={11} xs={24}>
          <ContentWrapper>
            <StyledHeadline>{title}</StyledHeadline>
            <Content>{t(content)}</Content>
            <ButtonWrapper>
              {typeof button === "object" &&
                button.map((item: any, id: number) => {
                  return (
                    <Button
                      key={id}
                      color={item.color}
                      onClick={() => scrollTo("about")}
                    >
                      {t(item.title)}
                    </Button>
                  );
                })}
            </ButtonWrapper>
          </ContentWrapper>
        </Col>
        <Col lg={11} md={11} sm={12} xs={24}>
        <IconWrapper noShadow={noShadow}>
          {iconType === "svg" ?
              <SvgIcon src={icon} width={size} height={size} /> :
              <PngIcon src={icon} width={size} height={size} />
            }
          </IconWrapper>
          <Empty/>
        </Col>
      </Row>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
