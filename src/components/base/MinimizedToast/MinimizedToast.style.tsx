import { styled, Typography } from '@mui/material';

export const StyledMinimizedToast = styled('button')<{ direction: string }>`
  width: fit-content;
  position: absolute;
  padding: 0.4rem 1.2rem;
  background: ${({ theme }) => theme.colorPalette.notifilcation.navyBlue};
  border-radius: 5rem;
  border-width: 0.0625rem 0 0 0;
  gap: 1rem;

  box-shadow: 0 0 0.58125rem 0.125rem #00000059;
  display: flex;
  align-items: center;
  justify-content: space-between;
  direction: ${({ direction }) => direction};
`;

export const StyledText = styled(Typography)`
  font-size: 1rem;
  color: ${({ theme }) => theme.colorPalette.colors.spWhite};
`;

export const RefreshButton = styled(Typography)`
  background: none;
  font-size: 1rem;
  border: none;
  font-weight: ${({ theme }) => theme.typography.fontWeightBold};
  color: ${({ theme }) => theme.colorPalette.refresh.color};
  cursor: pointer;
  margin: 0;
  font-weight: normal;
`;
