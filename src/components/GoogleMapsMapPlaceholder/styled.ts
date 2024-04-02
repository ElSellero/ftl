import styled from 'styled-components';

export const ContentWrapper = styled('div')`
  position: relative;
  min-width: 100%;
  min-height: 100%;
  margin-bottom: 8rem;
`;

export const BackgroundImage = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('../img/png/map.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  filter: blur(2px);
`;

export const ContentOverlay = styled('div')`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  z-index: 1;
`;
