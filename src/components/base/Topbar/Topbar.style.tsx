import { AppBar, styled, Toolbar, Typography } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  position: static;
  direction: rtl;
  height: 4rem;
  background-color: #1b1e2d;
`;

export const TopbarAppDetailsContainer = styled('div')`
  display: flex;
  align-items: center;
  direction: rtl;

  & > svg {
    margin-left: 0.5rem;
  }
`;

export const TopbarContainer = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

export const TopbarSearchContainer = styled('div')``;

export const TopbarUserContextContainer = styled('div')`
  width: 10%;
`;

export const AppNameTypography = styled(Typography)`
  font-weight: 600;
  direction: rtl;
  flex-grow: 1;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colorPalette.header.text};
`;
