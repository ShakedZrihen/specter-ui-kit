import { styled, Typography } from '@mui/material';

export const StyledMinimizedToast = styled('button')<{ direction: string }>`
  width: fit-content;
  height: 1.875rem;
  position: absolute;
  padding: 1.4rem;
  top: 8.9375rem;
  left: 31.625rem;
  background: ${({ theme }) => theme.colorPalette.notifilcation.navyBlue};
  gap: 1.5rem;
  border-radius: 9999px;
  border-width: 0.0625rem 0 0 0;
  
  box-shadow: 0 0 0.58125rem 0.125rem #00000059;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  direction: ${({ direction }) => direction};
  font-weight: ${({ theme }) => theme.typography.fontWeightLight};

  
`;

export const StyledText = styled(Typography)`
font-size: 14px;
line-height: 18px;
text-align: right;
color: ${({ theme }) => theme.colorPalette.colors.spWhite};
`;

export const RefreshButton = styled("button")`
  width: 1.875rem;
  height: 1.125rem;
  background: none;
  border: none;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  color: ${({ theme }) => theme.colorPalette.refresh.color};
  cursor: pointer;
`;