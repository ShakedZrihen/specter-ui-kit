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

export const PhotoContainer = styled('div')(() => ({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  height: '400px',
  maxHeight: '380px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '& img, & video': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
  },
}));

export const StyledImage = styled('img')<{
  scale: number;
  isExpanded: boolean;
  rotate: number;
}>`
  max-height: ${({ isExpanded }) => (isExpanded ? '100%' : '25rem')};
  max-width: ${({ isExpanded }) => (isExpanded ? '100%' : 'auto')};
  transition:
  transform 0.3s,
  max-height 0.3s,
  max-width 0.3s;
 transform: ${({ scale, isExpanded, rotate }) => {
    if (isExpanded) {
      return rotate ? `rotate(${rotate}deg)` : 'none';
    } 
    return rotate ? `rotate(${rotate}deg) scale(${scale})` : `scale(${scale})`;
  }};
  object-fit: ${({ isExpanded }) => (isExpanded ? 'contain' : 'cover')};
`;

export const ButtonContainer = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: '0.6rem',
  right: '0.6rem',
  display: 'flex',
  flexDirection: 'row',
  background: theme.colorPalette.common.white,
  justifyContent: 'normal',
  boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.12)',
  borderRadius: '1.2rem',
  gap: '0.2rem',
}));

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
  border: 1px solid #ced0d4;
  width: 1.2rem;
  height: 0px;
  gap: 0px;
  transform: rotate(-90deg);
  transition: opacity 0.3s ease-in-out;
  position: absolute;
  left: ${({ isExpanded }) => (isExpanded ? '70%' : '60%')};
  top: 50%;
`;

export const SimiliarButton = styled('button')(({ theme }) => ({
  position: 'absolute',
  top: '0.6rem',
  left: '0.6rem',
  background: theme.colorPalette.common.white,
  boxShadow: '0px 0px 5px 0px rgba(0, 0, 0, 0.12)',
  borderRadius: '9999px',
  border: 'none',
  gap: '1rem',
  padding: '0.5rem',
  cursor: 'pointer',
}));
