import { styled, alpha } from '@mui/material';
import { Snackbar, Typography } from '@mui/material';

export const StyledSmallNotification = styled('div')``;

export const StyleSnackbar = styled(Snackbar)`
  direction: rtl; 
  background-color: ${({ theme }) => theme.colorPalette.colors.spOrange_10}; 
  border-width: 1px 1px 0px 1px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colorPalette.colors.spOrange_50};
  padding: 6px;
  display: flex;
  flex-direction: column; 
  justify-content: flex-start;
  position: relative;
  width: 20rem;
  border-radius: 6px 6px 0px 0px; 
  box-shadow: 0px 0px 6.6px 2px ${({ theme }) => alpha(theme.colorPalette.colors.spBlack, 0.26)}; 
  gap: 24px; 
  opacity: 1; 

  .MuiSnackbarContent-root {
    background-color: ${({ theme }) => theme.colorPalette.colors.spOrange_10}; 
    padding: 0;
    box-shadow: none; 
  }

  .close-icon {
    position: absolute;
    top: 4px;
    left: 4px;
    font-size: 16px;
    cursor: pointer;
  }

  .action-button {
    position: absolute;
    bottom: 1rem;
    left: 1rem; 
    background-color: transparent; 
    border: none;
    padding: 0;
    margin: 0; 
    cursor: pointer;
    display: flex;
    cursor: pointer; /* Pointer cursor on hover */
  }
`;

export const StyledTitle = styled(Typography)`
font-weight: ${({ theme }) => theme.typography.fontWeightBold};
color: ${({ theme }) => theme.colorPalette.colors.spBlack};
text-align: right;
font-size: 1.125rem;
`;

export const StyledLabel = styled(Typography)`
font-weight: ${({ theme }) => theme.typography.fontWeightMedium};
color: ${({ theme }) => theme.colorPalette.colors.spBlack};
text-align: right;
`;

export const StyledButtonText = styled(Typography)`
color: ${({ theme }) => theme.colorPalette.colors.spBlue};
font-weight: ${({ theme }) => theme.typography.fontWeightBold};
`;