import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { SvgIcon } from "../../../common/SvgIcon";
import { ContentBlockProps, ListBlockObject, ListObject } from "../types";
import {
  LeftBlockContainer,
  Content,
  ContentWrapper,
  ServiceWrapper,
  MinTitle,
  MinPara,
  IconWrapper,
  Empty,
  StyledHeadline,
  MinSpecialTitle
} from "./styles";
import { PngIcon } from "../../../common/PngIcon";

const LeftContentBlock = ({
  icon,
  iconType = "svg",
  noShadow = false,
  title,
  content,
  contentSpecialColor,
  section,
  t,
  id,
  size = "100%",
  isList
}: ContentBlockProps) => {
  return (
    <LeftBlockContainer>
      <Row justify="space-between" align="middle" id={id}>
        <Col lg={11} md={11} sm={12} xs={24}>
          <IconWrapper noShadow={noShadow}>
            {iconType === "svg" ?
              <SvgIcon src={icon} width={size} height={size} /> :
              <PngIcon src={icon} width={size} height={size} />
            }
          </IconWrapper>
          <Empty/>
        </Col>
        <Col lg={11} md={11} sm={11} xs={24}>
          <ContentWrapper>
            <StyledHeadline>{t(title)}</StyledHeadline>
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
                            <>
                              {contentItem && 
                                <MinPara key={index}>
                                  {t(`- ${contentItem}`)}
                                </MinPara>
                              }
                            </>
                          ))}
                          <br/>
                        </>
                      ) : (
                        <>
                          <MinTitle>{t(item.title)}</MinTitle>
                          {item.content &&
                            <MinPara>{t(item.content)}</MinPara>
                          }
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
                        {
                          !contentSpecialColor ? 
                          <MinTitle>{t(item.title)}</MinTitle> :
                          <MinSpecialTitle>{t(item.title)}</MinSpecialTitle>
                        }
                        <MinPara>{t(item.content)}</MinPara>
                      </Col>
                    );
                  })}
              </Row>
            }
            </ServiceWrapper>
          </ContentWrapper>
        </Col>
      </Row>
    </LeftBlockContainer>
  );
};

export default withTranslation()(LeftContentBlock);
