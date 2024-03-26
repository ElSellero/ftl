import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Button } from "../../../common/Button";
import { ContentBlockProps, ListBlockObject, ListObject } from "../types";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
  IconWrapper,
  Empty,
  StyledHeadline,
  MinTitle,
  MinPara,
  ServiceWrapper
} from "./styles";
import { SvgIcon } from "../../../common/SvgIcon";
import { PngIcon } from "../../../common/PngIcon";

const RightBlock = ({
  title,
  content,
  icon,
  section,
  iconType = "svg",
  noShadow = false,
  t,
  id,
  size = "100%",
  isList
}: ContentBlockProps) => {
  return (
    <RightBlockContainer>
      <Row justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={11} xs={24}>
          <ContentWrapper>
            <StyledHeadline>{title}</StyledHeadline>
            <Content>{t(content)}</Content>

            <ServiceWrapper>
            {isList ? (
              <Row justify="space-between">
                <ul>
                  {isList.map((item: ListObject | ListBlockObject, id: number) => (
                    <li key={id}>
                      {item.type === 'ListBlockObject' ? (
                        <>
                          <MinTitle>{t(item.title)}</MinTitle>
                          {item.content.map((contentItem, index) => (
                            <MinPara key={index}>
                              {t(`- ${contentItem}`)}
                            </MinPara>
                          ))}
                          <br/>
                        </>
                      ) : (
                        <>
                          <MinTitle>{t(item.title)}</MinTitle>
                          <MinPara>{t(item.content)}</MinPara>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </Row>) : 
              <Row justify="space-between">
                {typeof section === "object" &&
                  section.map((item: any, id: number) => {
                    return (
                      <Col key={id} span={11}>
                        <SvgIcon src={item.icon} width="60px" height="60px" />
                        <MinTitle>{t(item.title)}</MinTitle>
                        <MinPara>{t(item.content)}</MinPara>
                      </Col>
                    );
                  })}
              </Row>
            }
            </ServiceWrapper>

            {/* <ButtonWrapper>
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
            </ButtonWrapper> */}
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
