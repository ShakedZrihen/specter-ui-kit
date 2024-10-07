import { useTranslation } from 'react-i18next';
import { Grid, MenuItem } from '@mui/material';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import SettingsIcon from '@mui/icons-material/Settings';
import { StyledGrid, StyledTypography } from './TranslateWithI18.style';
import { ILanguage } from '../../custom/TranslationButton/TranslationButton';
export interface TranslateWithI18Props {
  onLanguageChange: (type: 'system' | 'content', language: string) => void;
  supportedLanguages: {
    system: ILanguage[];
    content: ILanguage[];
  };
  contentLanguage: string;
}

export function TranslateWithI18({
  supportedLanguages,
  contentLanguage: currentLanguage,
  onLanguageChange
}: TranslateWithI18Props) {
  const { t, i18n } = useTranslation();

  return (
    <StyledGrid container>
      <Grid item>
        <StyledTypography isReversed={i18n.resolvedLanguage === 'en'}>
          <FormatColorTextIcon fontSize='small' />
          {t('content')}
        </StyledTypography>
        {supportedLanguages.content.map(item => {
          return (
            <MenuItem
              onClick={() => onLanguageChange('content', item.langKey)}
              disabled={currentLanguage === item.langKey}
            >
              {item.langKey === 'default'
                ? t('originalContent')
                : item.langName}
            </MenuItem>
          );
        })}
      </Grid>
      <Grid item>
        <StyledTypography isReversed={i18n.resolvedLanguage === 'en'}>
          <SettingsIcon fontSize='small' />
          {t('system')}
        </StyledTypography>
        {supportedLanguages.system.map(item => {
          return (
            <MenuItem
              onClick={() => onLanguageChange('system', item.langKey)}
              disabled={i18n.resolvedLanguage === item.langKey}
            >
              {item.langName}
            </MenuItem>
          );
        })}
      </Grid>
    </StyledGrid>
  );
}
