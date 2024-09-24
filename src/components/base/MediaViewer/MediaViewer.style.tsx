import styled from 'styled-components';

export const StyledMediaViewer = styled.div`
  /* Basic styling for the media viewer */
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PhotoContainer = styled.div`
  position: relative;
  width: 50%; /* Each photo takes half the space */
  img {
    width: 100%;
    object-fit: cover;
  }
`;

export const PhotoOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5); /* Dark overlay */
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
