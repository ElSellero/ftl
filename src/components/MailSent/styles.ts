import styled from "styled-components";
import { MailSentProps } from ".";

export const MailSentSection = styled("section")<MailSentProps>`
  position: relative;
  padding: 3rem 0 5rem;
  text-align: center;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    padding: 3.5rem 0 3rem;
  }
`;

export const Content = styled("p")<MailSentProps>`
  font-style: italic;
  padding: 0.75rem 0 0.75rem;
`;

export const ContentWrapper = styled("div")`
  max-width: 1000px;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
  }
`;

export const StyledHeadline = styled("h6")<MailSentProps>`
  font-size: 2.5rem;
`;