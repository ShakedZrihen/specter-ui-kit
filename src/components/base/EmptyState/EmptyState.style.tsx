import { styled } from '@mui/material';
import { EmptyStateIcon } from '../../icons';

export const StyledEmptyState = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  });

  export const StyledEmptyIcon = styled(EmptyStateIcon)({
    paddingBottom: '1rem',
  });
  
