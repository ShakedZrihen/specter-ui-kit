import { styled } from '@mui/material';

export const StyledIcon = styled('i')`
  color: ${({ color }) => color ?? 'inherit'};
  display: flex;
  justify-content: center;
  align-items: center;
`;
