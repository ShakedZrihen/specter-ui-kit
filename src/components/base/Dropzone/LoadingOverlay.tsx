import React from 'react';
import { CircularProgress, styled } from '@mui/material';

const StyledBackdrop = styled('div')(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: theme.zIndex.drawer + 1,
  color: '#fff',
}));

interface LoadingOverlayProps {
  visible: boolean;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ visible }) =>
  visible ? (
    <StyledBackdrop>
      <CircularProgress color='inherit' />
    </StyledBackdrop>
  ) : null;
