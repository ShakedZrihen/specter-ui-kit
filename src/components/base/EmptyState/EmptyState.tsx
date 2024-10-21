import { StyledEmptyState, StyledEmptyIcon } from './EmptyState.style';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export interface EmptyStateProps {
  label?: string;
}

export function EmptyState({ label }: EmptyStateProps) {
  const { t } = useTranslation();

  return <StyledEmptyState>
    <StyledEmptyIcon size={150} />
    {label ? (
      <>
      <Typography>{t('infoLine3')} <b>"{label}".</b></Typography>
      <Typography>{t('infoLine4')}</Typography>
      </>
    ) : (
      <>
      <Typography>{t('infoLine1')}</Typography>
      <Typography>{t('infoLine2')}</Typography>
      </>
    )}
  </StyledEmptyState>;
}
