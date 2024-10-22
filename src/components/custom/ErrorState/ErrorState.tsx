import { StyledErrorState, StyledErrorIcon } from './ErrorState.style';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

export interface ErrorStateProps {
  className?: string;
}

export function ErrorState({ className }: ErrorStateProps) {
  const { t } = useTranslation();

  return (
    <StyledErrorState className={className}>
      <StyledErrorIcon size={150} />
      <Typography>{t('errorHeader')}</Typography>
      <Typography>{t('errorInfo')}</Typography>
    </StyledErrorState>
  );
}
