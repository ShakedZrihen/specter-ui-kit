import { StyledErrorState, StyledErrorIcon } from './ErrorState.style';
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';

export function ErrorState() {
  const { t } = useTranslation();

  return (
    <StyledErrorState>
      <StyledErrorIcon size={150} />
      <Typography>{t('errorLine1')}</Typography>
      <Typography>{t('errorLine2')}</Typography>
    </StyledErrorState>
  );
}
