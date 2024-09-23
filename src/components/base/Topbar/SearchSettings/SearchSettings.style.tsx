import { styled } from '@mui/material';

export const StyledSearchSettings = styled('div')<{ width?: string }>`
  height: 2.4rem;
  background-color: ${({ theme }) => theme.colorPalette.header.background};
  ${({ width }) => (width ? `width: ${width};` : '')};
  border-right: 1px solid ${({ theme }) => theme.colorPalette.colors.primary};
`;
