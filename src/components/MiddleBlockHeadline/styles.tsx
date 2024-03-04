import styled from "styled-components";

export const MiddleBlockSection = styled("section")`
  position: relative;
  padding: 3rem 0 0rem;
  text-align: center;
  display: flex;
  justify-content: center;
  backdrop-filter: blur(2px);
  min-height: 300px;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }
`;

export const Content = styled("p")`
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 570px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

type HeadlineType = {
  inline?: boolean;
}

export const StyledHeadlineWhite = styled("h1")<HeadlineType>`
  font-style: italic;
  color: white;
  display: ${({inline}) => inline ? 'inline-block' : 'block'};
`;

export const StyledHeadlineBlue = styled("h1")<HeadlineType>`
  font-style: italic;
  color: #000080;
  display: ${({inline}) => inline ? 'inline-block' : 'block'};
`;

export const StyledHeadlineOrange = styled("h1")<HeadlineType>`
  font-style: italic;
  color: #FF6633;
  display: ${({inline}) => inline ? 'inline-block' : 'block'};
`;

export const StyledHeadlineBlueOrange = styled("h1")<HeadlineType>`
  font-style: italic;
  color: #ff6633;
  display: ${({inline}) => inline ? 'inline-block' : 'block'};
  &:first-letter {
    color: #000080;
  }
`;

export const StyledHeadlineBlack = styled("h1")<HeadlineType>`
  color: #282828;
  display: ${({inline}) => inline ? 'inline-block' : 'block'};
`;
