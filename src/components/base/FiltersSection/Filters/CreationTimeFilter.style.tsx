import { styled, Typography } from '@mui/material';
import { DesktopDateTimePicker } from '@mui/x-date-pickers/DesktopDateTimePicker';

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

export const StyledDesktopDateTimePicker = styled(DesktopDateTimePicker)`
  background-color: ${({ theme }) => theme.colorPalette.common.white};

  & *:focus {
    outline: none !important;
  }

  & *:hover {
    outline: none !important;
  }

  & .MuiInputBase-root {
    border: 1px solid ${({ theme }) => theme.colorPalette.divider.blue};

    &:hover {
      border: 1px solid ${({ theme }) => theme.colorPalette.link.color};
    }

    &:focus {
      border: 2px solid ${({ theme }) => theme.colorPalette.link.color};
    }
  }

  & .MuiInputBase-input {
    padding: 0;
    padding-left: 1rem;
    width: 10rem;
  }

  fieldset {
    border: 0px !important;
  }
`;
