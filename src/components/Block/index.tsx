import { withTranslation } from 'react-i18next';
import { Container, Content, TextWrapper } from './styles';

interface Props {
  title?: string;
  content?: string;
  children?: React.ReactNode;
  t: any;
}

const Block = ({ title, content, children, t }: Props) => {
  return (
    <Container>
      {title && <h6>{t(title)}</h6>}
      <TextWrapper>
        {content ? <Content>{t(content)}</Content> : children}
      </TextWrapper>
    </Container>
  );
};

export default withTranslation()(Block);
