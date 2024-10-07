import { ThemeProvider } from '@mui/material';
import { lightMode } from './lightMode';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n';

const themes = {
  default: lightMode,
};

interface SpecterThemeProps {
  children: React.ReactNode;
}

/**
 * Specter theme provider
 *
 * ```jsx
 * <SpecterTheme>
 *    {...}
 * </SpecterTheme>
 * ```
 */
export function SpecterTheme(props: SpecterThemeProps) {
  const { children } = props;

  return (
    <I18nextProvider i18n={i18n}>
      <ThemeProvider theme={themes.default}>{children}</ThemeProvider>
    </I18nextProvider>
  );
}
