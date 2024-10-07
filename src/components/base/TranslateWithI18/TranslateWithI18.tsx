import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, MenuItem } from '@mui/material';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import SettingsIcon from '@mui/icons-material/Settings';
import { StyledGrid, StyledTypography } from './TranslateWithI18.style';

export interface TranslateWithI18Props {
  textKey?: string; 
  language?: string;
}

export function TranslateWithI18({ textKey = "filters" }: TranslateWithI18Props) {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en'); 

  return (
      <StyledGrid container>
          <Grid item>
              <StyledTypography isReversed={i18n.resolvedLanguage === 'en'}>
                  <FormatColorTextIcon fontSize="small" />
                    {t("content")}
              </StyledTypography>
              <MenuItem onClick={() => setCurrentLanguage('he')} disabled={currentLanguage === 'he'}>עברית</MenuItem>
              <MenuItem onClick={() => setCurrentLanguage('en')} disabled={currentLanguage === 'en'}>English</MenuItem>
              <MenuItem onClick={() => setCurrentLanguage('')} disabled={currentLanguage === ''}>{t("originalContent")}</MenuItem>
            </Grid>
            <Grid item>
                <StyledTypography isReversed={i18n.resolvedLanguage === 'en'}>
                  <SettingsIcon fontSize="small" />
                    {t("system")}
                  </StyledTypography>
                  <MenuItem onClick={() => i18n.changeLanguage('he')} disabled={i18n.resolvedLanguage === 'he'}>עברית</MenuItem>
                    <MenuItem onClick={() => i18n.changeLanguage('en')} disabled={i18n.resolvedLanguage === 'en'}>English</MenuItem>
              </Grid>
        </StyledGrid>
  );
}
