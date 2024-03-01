import { withTranslation } from "react-i18next";
import { Container, StyledInput } from "./styles";
import { Label } from "../TextArea/styles";
import { InputProps } from "../types";

const Input = ({ name, placeholder, required, onChange, t }: InputProps) => (
  <Container>
    <Label htmlFor={name}>{t(name)}</Label>
    <StyledInput
      placeholder={t(placeholder)}
      name={name}
      id={name}
      required={required}
      onChange={onChange}
    />
  </Container>
);

export default withTranslation()(Input);
