export interface ContainerProps {
  border?: boolean;
  children: React.ReactNode;
}

export interface ButtonProps {
  color?: string;
  type?: string;
  fixedWidth?: string;
  disabled?: boolean;
  name?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export interface IconProps {
  src?: string;
  width?: string;
  height?: string;
}

export interface InputProps {
  name: string;
  placeholder?: string;
  t: any;
  type?: string;
  value?: string;
  required?: boolean;
  onChange?: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

export interface validateProps {
  name: string;
  message: string;
  email: string;
}
