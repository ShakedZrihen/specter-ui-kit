import { alpha, styled } from '@mui/material/styles';

export const StyledMediaViewer = styled('div')(() => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
}));

export const PhotoContainer = styled('div')(() => ({
  position: 'relative',
  width: '50%',
  '& img': {
    width: '100%',
    objectFit: 'cover',
  },
}));

export const StyledVideo = styled('video')({
  width: '100%',
  objectFit: 'cover',
});

export const TwoMediaWrapper = styled('div')({
  display: 'flex',
  gap: '10px',
});

export const SingleMediaWrapper = styled('div')({
  width: '100%',
});

export const PhotoOverlay = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: alpha(theme.colorPalette.colors.spBlack, 0.5),
  color: 'white',
  fontSize: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
}));
