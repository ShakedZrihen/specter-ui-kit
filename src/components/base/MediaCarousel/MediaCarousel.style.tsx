import { styled } from '@mui/material';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

export const StyledMediaCarousel = styled(ImageGallery)``;

export const MediaImage = styled('img')({
  width: '100%',
  height: 'auto',
  maxHeight: '500px',
  objectFit: 'cover',
});

export const MediaVideo = styled('video')({
  width: '100%',
  height: 'auto',
  maxHeight: '500px',
  objectFit: 'cover',
});
