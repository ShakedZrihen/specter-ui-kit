import { styled } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export const StyledMediaCarousel = styled(ImageGallery)`
  width: '100%',
  height: 'auto',
  maxWidth: '600px',
  maxHeight: '400px',
  objectFit: 'cover',
  margin: '0 auto',
`;

export const MediaVideo = styled('video')({
  width: '100%',
  height: 'auto',
  maxWidth: '600px',
  maxHeight: '400px',
  objectFit: 'cover',
  margin: '0 auto',
});
