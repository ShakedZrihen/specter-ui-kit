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
}

export const Topbar = ({
  appName,
  appIcon,
  onSearch,
  withSearch,
  withTranslationButton,
  onLanguageChange,
}: TopbarProps) => {
  return (
    <StyledAppBar>
      <TopbarContainer>
        <TopbarAppDetailsContainer>
          {appIcon}
          <AppNameTypography>{appName}</AppNameTypography>
        </TopbarAppDetailsContainer>
        {withSearch && onSearch && (
          <TopbarSearchContainer>
            <Search onSearch={onSearch} />
          </TopbarSearchContainer>
        )}
        <TopbarUserContextContainer>
          {withTranslationButton && onLanguageChange && (
            <TranslationButton 
              onLanguageChange={onLanguageChange} 
              supportedLanguages={['en', 'ar', 'he']} 
            />
          )}
        </TopbarUserContextContainer>
      </TopbarContainer>
    </StyledAppBar>
  );
};
