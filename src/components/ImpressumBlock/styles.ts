import styled from 'styled-components';

export const ContentWrapper = styled('div')`
  min-width: 100%;
  min-height: 100%;
  background-position-y: center;
`;

export const TextBlock = styled('span')`
  font-weight: 500;
  color: #404041;
  text-align: left;
  display: block;
  justify-content: space-between;
  align-items: baseline;
`;

export const TextBlockBold = styled('span')`
  font-family: 'Lunasima Bold', sans-serif;
  font-weight: 500;
  color: #404041;
  text-align: left;
  display: block;
  justify-content: space-between;
  align-items: baseline;
`;

export const Empty = styled('div')`
  position: relative;
  height: 2rem;
`;
