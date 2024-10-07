import { styled, Grid, Typography } from '@mui/material';

export const StyledGrid = styled(Grid)`
padding: 0.5rem;
border-right-width: 0px;
border-left-width: 2px;
column-gap: 0.75rem;
`;

export const StyledTypography = styled(Typography)<{ isReversed: boolean }>`
  padding-left: 4px;
  padding-right: 4px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid;
  padding-bottom: 8px;
  font-weight: bold;
  column-gap: 0.25rem;

  /* Conditional styles based on the isReversed prop */
  ${({ isReversed }) =>
    isReversed &&
    `
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;
  `}
`;
