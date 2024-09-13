import { AppBar, styled, Typography } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  position: static;
  direction: rtl;
  background-color: #1b1e2d;
`;

export const TopbarAppDetailsContainer = styled('div')`
  display: flex;
  align-items: center;
  direction: rtl;

  & > svg {
    margin-left: 0.4rem;
  }
`;

export const AppNameTypography = styled(Typography)`
  font-weight: 700;
  direction: rtl;
  flex-grow: 1;
  font-size: 1.5rem;
  color: #F2F2F2;
`;
