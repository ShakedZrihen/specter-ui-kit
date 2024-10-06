import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Grid, Typography, MenuItem, Menu } from '@mui/material';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import SettingsIcon from '@mui/icons-material/Settings';

export interface TranslateWithI18Props {
  textKey?: string; 
  language?: string;
}

export function TranslateWithI18({ textKey = "filters" }: TranslateWithI18Props) {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en'); 

  return (
      <Grid container spacing={1} className="divide-x-2">
          <Grid item>
              <Typography className={`${i18n.resolvedLanguage === 'en' ? "" : "flex flex-row-reverse place-content-center"} px-1 flex items-center border-b-2 pb-2`} style={{ fontWeight: 'bold' }}>
                  <FormatColorTextIcon fontSize="small" />
                    {t("lineContent")}
              </Typography>
              <MenuItem onClick={() => setCurrentLanguage('he')} disabled={currentLanguage === 'he'}>עברית</MenuItem>
              <MenuItem onClick={() => setCurrentLanguage('en')} disabled={currentLanguage === 'en'}>English</MenuItem>
              <MenuItem onClick={() => setCurrentLanguage('')} disabled={currentLanguage === ''}>{t("originalContent")}</MenuItem>
            </Grid>
            <Grid item className="pl-1">
                <Typography className={`${i18n.resolvedLanguage === 'en' ? "" : "flex flex-row-reverse"} px-1 flex items-center border-b-2 pb-2`} style={{ fontWeight: 'bold' }}>
                  <SettingsIcon fontSize="small" />
                    {t("lineSystem")}
                  </Typography>
                  <MenuItem onClick={() => i18n.changeLanguage('he')} disabled={i18n.resolvedLanguage === 'he'}>עברית</MenuItem>
                    <MenuItem onClick={() => i18n.changeLanguage('en')} disabled={i18n.resolvedLanguage === 'en'}>English</MenuItem>
              </Grid>
        </Grid>
  );
}
