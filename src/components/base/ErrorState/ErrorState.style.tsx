import { styled } from '@mui/material';
import { ErrorIcon } from '../../icons';

export const StyledErrorState = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
});

export const StyledErrorIcon = styled(ErrorIcon)({
  paddingBottom: '1rem',
});
