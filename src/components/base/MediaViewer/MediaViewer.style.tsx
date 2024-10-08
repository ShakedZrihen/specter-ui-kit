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
  width: '100%',
  height: '400px',
  maxHeight: '500px',
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

export const StyledImage = styled('img')`
  max-height: 25rem;
`;
