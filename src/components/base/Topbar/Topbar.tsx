import React from 'react';
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
import { SearchSettings } from './SearchSettings';
import { useSearch } from './Search/useSearch';
import { SearchProps } from './Search/Search.types';

interface TranslationProps {
  withTranslationButton?: boolean;
  supportedLanguages?: string[];
  onLanguageChange?: (language: string) => void;
}
interface TopbarProps extends SearchProps, TranslationProps {
  appName: string;
  appIcon?: React.ReactElement;
  className?: string;
}

export const Topbar = ({
  appName,
  appIcon,
  className,
  // search props
  withSearch,
  searchSettingsStyleOverrides,
  onSearch,
  // translation props
  withTranslationButton,
  supportedLanguages = ['en', 'ar', 'he'],
  onLanguageChange,
}: TopbarProps) => {
  const searchParams = useSearch({ onSearch });

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
                onSearch={searchParams.performSearch}
                searchTerm={searchParams.searchTerm}
                setSearchTerm={searchParams.setSearchTerm}
                onFocus={() => searchParams.setSearchFocused(true)}
                searchInputRef={searchParams.searchInputRef}
              />
            </TopbarSearchContainer>
          )}
          <TopbarUserContextContainer>
            {withTranslationButton && onLanguageChange && (
              <TranslationButton
                onLanguageChange={onLanguageChange}
                supportedLanguages={supportedLanguages}
              />
            )}
          </TopbarUserContextContainer>
        </TopbarContainer>
      </StyledAppBar>
      {withSearch && searchParams.searchFocused && (
        <SearchSettings
          searchSettingsStyleOverrides={searchSettingsStyleOverrides}
          onChange={searchParams.onSearchSettingsChange}
          searchType={searchParams.searchType}
          setSearchType={searchParams.setSearchType}
          close={searchParams.closeSearchSettings}
        />
      )}
    </TopbarWithSettingBar>
  );
};
