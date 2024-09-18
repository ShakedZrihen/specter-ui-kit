import React, { useState } from 'react';
import { StyledTranslationButton, StyledTranslateIcon } from './TranslationButton.style';
import { Menu, MenuItem } from '@mui/material';

export interface TranslationButtonProps {

  onLanguageChange: (language: string) => void;
}

export function TranslationButton({ onLanguageChange }: TranslationButtonProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLanguageChange = (language: string) => {
    onLanguageChange(language);
    handleClose();
  };

  return (
    <>
      <StyledTranslationButton
        aria-controls={anchorEl ? 'language-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <StyledTranslateIcon />
      </StyledTranslationButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleLanguageChange('en')}>English</MenuItem>
        <MenuItem onClick={() => handleLanguageChange('ar')}>Arabic</MenuItem>
        <MenuItem onClick={() => handleLanguageChange('he')}>Hebrew</MenuItem>
      </Menu>
    </>
  );
}
