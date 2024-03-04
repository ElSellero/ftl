export type ListObject = {
  id: string;
  title: string;
  content: string;
}

export interface ContentBlockProps {
  icon?: string;
  iconType?: string;
  noShadow?: boolean;
  title?: string;
  content?: string;
  section?: any;
  button?: any;
  t?: any;
  id?: string;
  type?: string;
  size?: string;
  isList?: Array<ListObject>;
}
