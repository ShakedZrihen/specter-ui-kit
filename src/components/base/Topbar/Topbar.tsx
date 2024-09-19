import { ReactElement } from 'react';
import {
  AppNameTypography,
  StyledAppBar,
  TopbarAppDetailsContainer,
  TopbarContainer,
  TopbarSearchContainer,
  TopbarUserContextContainer,
} from './Topbar.style';
import { Search } from './Search';

interface TopbarProps {
  appName: string;
  appIcon?: ReactElement;
  withSearch?: boolean;
  onSearch?: (searchTerm: string) => void;
  className?: string;
}

export const Topbar = ({
  appName,
  appIcon,
  onSearch,
  withSearch,
  className,
}: TopbarProps) => {
  const topbarElements = [
    <TopbarAppDetailsContainer>
      {appIcon}
      <AppNameTypography>{appName}</AppNameTypography>
    </TopbarAppDetailsContainer>,
  ];

  if (withSearch && onSearch) {
    topbarElements.push(
      <TopbarSearchContainer key='search'>
        <Search onSearch={onSearch} />
      </TopbarSearchContainer>,
    );
  }

  topbarElements.push(<TopbarUserContextContainer />);

  return (
    <StyledAppBar className={className}>
      <TopbarContainer>{topbarElements}</TopbarContainer>
    </StyledAppBar>
  );
};
