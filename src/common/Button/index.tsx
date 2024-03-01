import { StyledButton } from "./styles";
import { ButtonProps } from "../types";

export const Button = ({
  color,
  type,
  fixedWidth,
  children,
  disabled = false,
  onClick,
}: ButtonProps) => {

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    if (onClick) {
        onClick();
    }
};
  return(

  <StyledButton color={color} fixedWidth={fixedWidth} disabled={disabled} onClick={disabled ? undefined : handleClick} type={type}>
    {children}
  </StyledButton>
  )
};
