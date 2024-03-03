import { StyledIntroContainer } from "./styles";
import { ContainerProps } from "../types";

const IntroContainer = ({ border, children }: ContainerProps) => (
    <StyledIntroContainer border={border}>{children}</StyledIntroContainer>
);

export default IntroContainer;