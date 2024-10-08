import { StyledMinimizedToast, StyledText, RefreshButton } from './MinimizedToast.style';
import { useTranslation } from 'react-i18next';

export interface MinimizedToastProps {
  amount: number;
  onClick: () => void;
}

export function MinimizedToast({ amount, onClick }: MinimizedToastProps) {
  const { t, i18n } = useTranslation();

  return <StyledMinimizedToast direction={i18n.resolvedLanguage === "en" ? "ltr" : "rtl"}>
    <StyledText>
    {amount.toLocaleString()} {t('newPosts')}
    </StyledText>
    <RefreshButton onClick={onClick}>
    {t('refresh')}
    </RefreshButton>
    </StyledMinimizedToast>;
}
