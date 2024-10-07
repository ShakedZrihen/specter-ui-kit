import React, { useState } from 'react';
import {
  StyledTranslationButton,
  StyledTranslateIcon,
} from './TranslationButton.style';
import Menu from '@mui/material/Menu';
import { TranslateWithI18 } from '../../base/TranslateWithI18';

export interface ILanguage { 
  langKey: string;
  langName: string;
}

export interface TranslationButtonProps {
  onLanguageChange: (type: 'system' | 'content', language: string) => void;
  supportedLanguages: {
    system: ILanguage[];
    content: ILanguage[];
  }
}

export function TranslationButton({ onLanguageChange, supportedLanguages
}: TranslationButtonProps) {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setAnchorEl(null);
  };


  return (
    <>
      <StyledTranslationButton
        aria-controls={open ? 'language-menu' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <StyledTranslateIcon />
      </StyledTranslationButton>
      <Menu
        id='language-menu'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <TranslateWithI18 onLanguageChange={onLanguageChange} supportedLanguages={supportedLanguages} />
      </Menu>
    </>
  );
}
