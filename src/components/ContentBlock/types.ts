export type ListObject = {
  id: string;
  title: string;
  content: string;
  type: 'ListObject';
}

export type ListBlockObject = {
  id: string;
  title: string;
  content: Array<string>;
  type: 'ListBlockObject';
}

export interface ContentBlockProps {
  icon?: string;
  iconType?: string;
  noShadow?: boolean;
  title?: string;
  content?: string;
  contentSpecialColor?: boolean;
  section?: any;
  button?: any;
  t?: any;
  id?: string;
  type?: string;
  size?: string;
  isList?: Array<ListObject | ListBlockObject>;
}
