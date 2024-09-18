import { ReactElement } from 'react';
import {
  AppNameTypography,
  StyledAppBar,
  TopbarAppDetailsContainer,
  TopbarContainer,
  TopbarSearchContainer,
  TopbarUserContextContainer,
} from './Topbar.style';
import { Search } from './Search/Search'; 
import { TranslationButton } from '../TranslationButton/TranslationButton';

interface TopbarProps {
  appName: string;
  appIcon?: ReactElement; 
  withSearch?: boolean;
  withTranslationButton?: boolean; 
  onSearch?: (searchTerm: string) => void;
  onLanguageChange?: (language: string) => void; 
}

export const Topbar = ({
  appName,
  appIcon,
  onSearch,
  withSearch,
  withTranslationButton,
  onLanguageChange, 
}: TopbarProps) => {
  const topbarElements = [
    <TopbarAppDetailsContainer key="app-details">
      {appIcon}
      <AppNameTypography>{appName}</AppNameTypography>
    </TopbarAppDetailsContainer>,
  ];

  if (withSearch && onSearch) {
    topbarElements.push(
      <TopbarSearchContainer key="search">
        <Search onSearch={onSearch} />
      </TopbarSearchContainer>
    );
  }

  if (withTranslationButton && onLanguageChange) {
    topbarElements.push(
      <TopbarUserContextContainer key="translation-button">
        <TranslationButton onLanguageChange={onLanguageChange} />
      </TopbarUserContextContainer>
    );
  }

  return (
    <StyledAppBar>
      <TopbarContainer>{topbarElements}</TopbarContainer>
    </StyledAppBar>
  );
};
