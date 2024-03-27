import { Col, Row } from 'antd';
import { withTranslation } from 'react-i18next';
import { Button } from '../../../common/Button';
import { PngIcon } from '../../../common/PngIcon';
import { SvgIcon } from '../../../common/SvgIcon';
import { ContentBlockProps, ListBlockObject, ListObject } from '../types';
import {
  ButtonWrapper,
  Content,
  ContentWrapper,
  Empty,
  IconWrapper,
  MinPara,
  MinSpecialTitle,
  MinTitle,
  RightBlockContainer,
  ServiceWrapper,
  StyledHeadline,
} from './styles';

const RightContentBlock = ({
  icon,
  iconType = 'svg',
  title,
  content,
  contentSpecialColor,
  section,
  noShadow = false,
  t,
  id,
  size = '100%',
  isList,
}: ContentBlockProps) => {
  return (
    <RightBlockContainer>
      <Row justify='space-between' align='middle' id={id}>
        <Col lg={11} md={24} sm={24} xs={24}>
          <IconWrapper noShadow={noShadow}>
            {iconType === 'svg' ? (
              <SvgIcon src={icon} width={size} height={size} />
            ) : (
              <PngIcon src={icon} width={size} height={size} />
            )}
          </IconWrapper>
          <Empty />
        </Col>
        <Col lg={11} md={24} sm={24} xs={24}>
          <ContentWrapper>
            <StyledHeadline>{title}</StyledHeadline>
            <Content>{content}</Content>
            <ServiceWrapper>
              {isList ? (
                <Row justify='space-between'>
                  <ul>
                    {isList.map(
                      (item: ListObject | ListBlockObject, id: number) => (
                        <li key={id}>
                          {item.type === 'ListBlockObject' ? (
                            <>
                              <MinTitle>{t(item.title)}</MinTitle>
                              {item.content.map((contentItem, index) => (
                                <>
                                  {contentItem && (
                                    <MinPara key={index}>
                                      {t(`- ${contentItem}`)}
                                    </MinPara>
                                  )}
                                </>
                              ))}
                              <br />
                            </>
                          ) : (
                            <>
                              <MinTitle>{t(item.title)}</MinTitle>
                              {item.content && (
                                <MinPara>{t(item.content)}</MinPara>
                              )}
                            </>
                          )}
                        </li>
                      )
                    )}
                  </ul>
                </Row>
              ) : (
                <Row justify='space-between'>
                  {typeof section === 'object' &&
                    section.map((item: any, id: number) => {
                      return (
                        <Col key={id} span={11}>
                          <SvgIcon src={item.icon} width='60px' height='60px' />
                          {!contentSpecialColor ? (
                            <MinTitle>{t(item.title)}</MinTitle>
                          ) : (
                            <MinSpecialTitle>{t(item.title)}</MinSpecialTitle>
                          )}
                          <MinPara>{t(item.content)}</MinPara>
                        </Col>
                      );
                    })}
                </Row>
              )}
            </ServiceWrapper>
          </ContentWrapper>
        </Col>
      </Row>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightContentBlock);
