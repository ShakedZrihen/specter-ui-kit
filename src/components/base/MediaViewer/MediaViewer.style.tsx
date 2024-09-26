import { alpha, styled } from '@mui/material/styles';

export const StyledMediaViewer = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '5px',
}));

export const PhotoContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '100%',
  height: '100%',
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '8px',
  },
}));

export const StyledVideo = styled('video')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '8px',
});

export const TwoMediaWrapper = styled('div')({
  display: 'flex',
  gap: '10px',
  width: '90%',
  justifyContent: 'space-evenly',
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
  background: alpha(theme.palette.common.black, 0.5),
  color: 'white',
  fontSize: '24px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  borderRadius: '8px',
}));
