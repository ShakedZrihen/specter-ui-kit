import { StyledEmptyState, StyledEmptyIcon } from './EmptyState.style';
import { Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export interface EmptyStateProps {
  label?: string;
  className?: string;
}

export function EmptyState({ label, className }: EmptyStateProps) {
  const { t } = useTranslation();

  return (
    <StyledEmptyState className={className}>
      <StyledEmptyIcon size={150} />
      {label ? (
        <>
          <Typography>
            {t('InfoHeaderSearchQuery')} <b>"{label}".</b>
          </Typography>
          <Typography>{t('infoBodySearchQuery')}</Typography>
        </>
      ) : (
        <>
          <Typography>{t('InfoHeader')}</Typography>
          <Typography>{t('InfoBody')}</Typography>
        </>
      )}
    </StyledEmptyState>
  );
}
