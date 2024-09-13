import Toolbar from '@mui/material/Toolbar';
import {
  AppNameTypography,
  StyledAppBar,
  TopbarAppDetailsContainer,
} from './Topbar.style';
import { ReactElement } from 'react';

interface TopbarProps {
  appName: string;
  appIcon?: ReactElement;
}

export const Topbar = ({ appName, appIcon }: TopbarProps) => {
  return (
    <StyledAppBar>
      <Toolbar>
        <TopbarAppDetailsContainer>
          {appIcon}
          <AppNameTypography>{appName}</AppNameTypography>
        </TopbarAppDetailsContainer>
      </Toolbar>
    </StyledAppBar>
  );
};
