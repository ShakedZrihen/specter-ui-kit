import { styled, Typography } from '@mui/material';

export const StyledFilter = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 1rem;
`;

export const StyledLabel = styled(Typography)`
  font-weight: 600;
  font-size: 1rem;
`;

export const ActionsContainer = styled('div')`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
`;

export const TrashContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;

  :hover {
    cursor: pointer;
  }
`;
