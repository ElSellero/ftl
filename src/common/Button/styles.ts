import styled from "styled-components";
import { ButtonProps } from "../types";

export const StyledButton = styled("button")<any | ButtonProps>`
  background: ${({disabled}) => disabled ? "#bdc1c6" : "#202124"};
  color: ${(p) => (p.color ? "#202124" : "#fff")};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: 1px solid #edf3f5;
  border-radius: 4px;
  padding: 13px 0;
  cursor: ${({disabled}) => disabled ? 'not-allowed' : 'pointer'};
  max-width: 180px;
  width: ${({fixedWidth}) => fixedWidth || '100%'};
  transition: all 0.3s ease-in-out;
  box-shadow: 0 16px 30px rgb(23 31 114 / 20%);

  &:hover,
  &:active,
  &:focus {
    color: #fff;
    border: ${({disabled}) => disabled ? '1px solid #edf3f5' : '1px solid #FF6633'};
    background-color: ${({disabled}) => disabled ? '#bdc1c6' : '#FF6633'};
  }
`;
