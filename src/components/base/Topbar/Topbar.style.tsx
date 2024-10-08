import { AppBar, styled, Toolbar, Typography } from '@mui/material';

export const StyledAppBar = styled(AppBar)`
  position: static;
  direction: rtl;
  height: 3rem;
  background-color: ${({ theme }) => theme.colorPalette.header.background};
  box-shadow: none !important;
  border-bottom: 1px solid ${({ theme }) => theme.colorPalette.colors.primary};

  & .MuiToolbar-root {
    min-height: 3rem;
  }
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
  align-items: center;
  width: 100%;
`;

export const TopbarSearchContainer = styled('div')`
  display: flex;
  align-items: center;
  flex-grow: 1;
  justify-content: center;
`;

export const TopbarUserContextContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10%;
  margin-left: 1rem;
`;

export const AppNameTypography = styled(Typography)`
  font-weight: 600;
  direction: rtl;
  flex-grow: 1;
  font-size: 1.8rem;
  color: ${({ theme }) => theme.colorPalette.header.text};
`;

export const TopbarWithSettingBar = styled('div')`
  display: flex;
  flex-direction: column;
`;
