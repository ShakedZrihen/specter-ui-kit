import { alpha, styled } from '@mui/material/styles';

export const PhotoOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: alpha(theme.palette.common.black, 0.5),
  color: 'white',
  fontSize: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  borderRadius: '8px',
}));

export const StyledMediaViewer = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '5px',
}));

export const StyledVideo = styled('video')({
  width: '100%',
  height: '100%',
  maxWidth: '500px',
  maxHeight: '500px',
  objectFit: 'cover',
  borderRadius: '8px',
});

export const SingleMediaWrapper = styled('div')({
  width: '100%',
  maxWidth: '500px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const TwoMediaWrapper = styled('div')({
  display: 'flex',
  gap: '10px',
  width: '90%',
  maxWidth: '1000px',
  justifyContent: 'space-evenly',
  alignItems: 'center',
});

export const PhotoContainer = styled('div')<{ isSingleView: boolean }>`
  position: relative;
  overflow: hidden;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  width: 100%;
  height: 400px;
  max-height: 380px;
  display: flex;
  justify-content: center;
  align-items: center;

  & img,
  & video {
    width: 100%;
    object-fit: ${({ isSingleView }) => (isSingleView ? '' : 'cover')};
    height: 100%;
    border-radius: 8px;
  }
`;

export const StyledImage = styled('img')<{
  scale: number;
  isExpanded: boolean;
  rotate: number;
}>`
  max-height: ${({ isExpanded, rotate }) =>
    (rotate === 90 || rotate === 270) && isExpanded
      ? '100vw'
      : isExpanded
        ? '100vh'
        : '25rem'};
  max-width: ${({ isExpanded, rotate }) =>
    (rotate === 90 || rotate === 270) && isExpanded
      ? '100vh'
      : isExpanded
        ? '100vw'
        : 'auto'};

  transition:
    transform 0.3s,
    max-height 0.3s,
    max-width 0.3s,
    top 0.3s,
    left 0.3s,
    right 0.3s,
    bottom 0.3s;

  position: ${({ isExpanded }) => (isExpanded ? 'fixed' : 'relative')};
  top: ${({ isExpanded }) => (isExpanded ? '50%' : 'auto')};
  left: ${({ isExpanded }) => (isExpanded ? '50%' : 'auto')};
  transform-origin: center;

  /* Center the image only when expanded and rotated */
  transform: ${({ scale, isExpanded, rotate }) => {
    if (isExpanded) {
      return `translate(-50%, -50%) scale(${scale})${rotate ? ` rotate(${rotate}deg)` : ''}`;
    }
    return rotate ? `rotate(${rotate}deg) scale(${scale})` : `scale(${scale})`;
  }};

  z-index: ${({ isExpanded }) => (isExpanded ? '9999' : 'auto')};

  object-fit: contain;
`;

export const ButtonContainer = styled('div')<{
  isExpanded: boolean;
  isVisible: boolean;
}>`
  display: flex;
  flex-direction: row;
  background: ${({ theme }) => theme.colorPalette.common.white};
  justify-content: normal;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: 1.2rem;
  gap: 0.2rem;
  direction: rtl;
  position: ${({ isExpanded }) => (isExpanded ? 'fixed' : 'absolute')};
  top: ${({ isExpanded }) => (isExpanded ? '0.3rem' : '0.6rem')};
  right: ${({ isExpanded }) => (isExpanded ? '0.3rem' : '0.6rem')};
  z-index: ${({ isExpanded }) => (isExpanded ? '9999' : 'auto')};
  visibility: ${({ isVisible }) => (isVisible ? 'hidden' : 'visible')};
`;

export const ActionButton = styled('button')(() => ({
  backgroundColor: 'transparent',
  border: 'none',
  padding: '0.5rem',
  margin: '0',
  gap: '0',
  cursor: 'pointer',
  height: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

export const Divider = styled('div')<{ isExpanded: boolean }>`
  border: 1px solid ${({ theme }) => theme.colorPalette.divider.color};
  width: 1.2rem;
  height: 0px;
  gap: 0px;
  transform: rotate(-90deg);
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  left: ${({ isExpanded }) => (isExpanded ? '70%' : '60%')};
  top: 50%;
`;

export const SimiliarButton = styled('button')<{ isVisible: boolean }>`
  position: absolute;
  top: 0.6rem;
  left: 0.6rem;
  background: ${({ theme }) => theme.colorPalette.common.white};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.12);
  border-radius: 9999px;
  border: none;
  gap: 1rem;
  padding: 0.5rem;
  cursor: pointer;
  visibility: ${({ isVisible }) => (isVisible ? 'hidden' : 'visible')};
`;
