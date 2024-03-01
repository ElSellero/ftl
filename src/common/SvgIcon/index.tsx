import { IconProps } from "../types";

export const SvgIcon = ({ src, width, height }: IconProps) => (
  <img src={`/img/svg/${src}`} alt={src} width={width} height={height} />
);
