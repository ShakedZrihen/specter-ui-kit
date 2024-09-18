import { Button, styled } from '@mui/material';

export const StyledButton = styled(Button)`
  border-radius: 100px;
  direction: rtl;
  color: ${({ theme }) => theme.colorPalette.link.color};
  border: 1px solid ${({ theme }) => theme.colorPalette.link.color};

  & span {
    margin-left: 0.2rem;
  }
`;
