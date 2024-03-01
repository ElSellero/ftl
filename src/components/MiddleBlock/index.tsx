import { Row, Col } from "antd";
import { withTranslation } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, Content, ContentWrapper, StyledHeadline } from "./styles";

export interface MiddleBlockProps {
  title?: string;
  content?: string;
  button?: string;
  t?: any;
  isIntro?: boolean;
  id?: string;
}

const MiddleBlock = ({ title, content, button, id, t, isIntro = false }: MiddleBlockProps) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <MiddleBlockSection isIntro={isIntro} id={id}>
      {isIntro ? 
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <StyledHeadline isIntro={isIntro}>{t(title)}</StyledHeadline>
              <Content isIntro={isIntro}>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("about")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      :
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <StyledHeadline>{t(title)}</StyledHeadline>
              <Content>{t(content)}</Content>
              {button && (
                <Button name="submit" onClick={() => scrollTo("services1")}>
                  {t(button)}
                </Button>
              )}
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>}
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
