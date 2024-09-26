import { styled } from '@mui/material';

export const StyledSystemChip = styled('div')``;

export const StatusChip = styled('button')`
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: none;
  gap: 0.5rem;
  width: 4rem;
  height: 2rem;
  cursor: pointer;
`;

export const InfoChip = styled('button')`
  display: flex;
  align-items: center;
  justify-content: center;
  border-style: none;
  gap: 0.5rem;
  width: 5rem;
  height: 2rem;
  flex-direction: row;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colorPalette.filterChip.background};
`;
