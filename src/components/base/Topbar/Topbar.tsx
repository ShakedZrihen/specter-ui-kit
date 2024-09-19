import React from 'react';
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
  appIcon?: React.ReactElement;
  withSearch?: boolean;
  withTranslationButton?: boolean;
  onSearch?: (searchTerm: string) => void;
  onLanguageChange?: (language: string) => void;
  supportedLanguages?: string[]; 
}

export const Topbar = ({
  appName,
  appIcon,
  onSearch,
  withSearch,
  withTranslationButton,
  onLanguageChange,
  supportedLanguages = ['en', 'ar', 'he'], 
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
        <TranslationButton 
          onLanguageChange={onLanguageChange} 
          supportedLanguages={supportedLanguages} 
        />
      </TopbarUserContextContainer>
    );
  }

  return (
    <StyledAppBar>
      <TopbarContainer>{topbarElements}</TopbarContainer>
    </StyledAppBar>
  );
};
