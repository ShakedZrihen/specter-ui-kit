import { ThemeProvider } from '@mui/material';
import { lightMode } from './lightMode';

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

  return <ThemeProvider theme={themes.default}>{children}</ThemeProvider>;
}
