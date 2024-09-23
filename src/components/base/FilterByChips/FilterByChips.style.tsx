import { Chip, styled } from '@mui/material';

export const StyledFilterByChips = styled('div')`
  display: flex;
  align-items: center;
  height: 2rem;
  background-color: ${({ theme }) => theme.colorPalette.colors.spWhite};
  box-shadow: 0px 0px 5px 0px #0000001f;
  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
  direction: rtl;
  border-radius: 38px;
  margin-left: 1rem;
`;

export const ChipContainer = styled('div')`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
`;

export const ClearFilters = styled(Chip)`
  padding: 0.2rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.colorPalette.divider.blue};
  & .MuiChip-label {
    padding: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: 600;
  }
  :hover {
    cursor: pointer;
  }
`;

export const FilterChip = styled(Chip)`
  padding: 0.2rem 0.8rem;
  border: 1px solid ${({ theme }) => theme.colorPalette.divider.blue};
  background-color: ${({ theme }) => theme.colorPalette.filterChip.background};
  & .MuiChip-label {
    padding: 0;
    font-family: ${({ theme }) => theme.typography.fontFamily};
    font-weight: 600;
  }
  margin-left: 0.5rem;
`;
