import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledTranslateWitchI18 } from './TranslateWitchI18.style';

export interface TranslateWitchI18Props {
  textKey?: string; 
  language?: string;
}

export function TranslateWitchI18({ textKey = "filters" }: TranslateWitchI18Props) {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language || 'en'); 

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
    setCurrentLanguage(language);
  };

  return (
    <div>
      <StyledTranslateWitchI18>{t(textKey)}</StyledTranslateWitchI18>
      <button onClick={() => changeLanguage(currentLanguage === 'en' ? 'he' : 'en')}>
        Select language {currentLanguage === 'en' ? 'Hebrew' : 'English'}
      </button>
    </div>
  );
}
