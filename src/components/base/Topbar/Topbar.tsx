import React, { useState } from 'react';
import {
  AppNameTypography,
  StyledAppBar,
  TopbarAppDetailsContainer,
  TopbarContainer,
  TopbarSearchContainer,
  TopbarUserContextContainer,
  TopbarWithSettingBar,
} from './Topbar.style';
import { Search } from './Search/Search';
import { TranslationButton } from '../../custom/TranslationButton/TranslationButton';
import { StyledSearchSettings } from './SearchSettings/SearchSettings.style';

interface TopbarProps {
  appName: string;
  appIcon?: React.ReactElement;
  withSearch?: boolean;
  withTranslationButton?: boolean;
  onSearch?: (searchTerm: string) => void;
  className?: string;
  onLanguageChange?: (language: string) => void;
}

export const Topbar = ({
  appName,
  appIcon,
  onSearch,
  withSearch,
  className,
  withTranslationButton,
  onLanguageChange,
}: TopbarProps) => {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <TopbarWithSettingBar>
      <StyledAppBar className={className}>
        <TopbarContainer>
          <TopbarAppDetailsContainer>
            {appIcon}
            <AppNameTypography>{appName}</AppNameTypography>
          </TopbarAppDetailsContainer>
          {withSearch && onSearch && (
            <TopbarSearchContainer>
              <Search
                onSearch={onSearch}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
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
      {withSearch && searchFocused && (
        <StyledSearchSettings width='calc(100% - 4rem)' />
      )}
    </TopbarWithSettingBar>
  );
};
