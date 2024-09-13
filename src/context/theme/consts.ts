export const COLOR_MODE = {
  DARK_MODE: 'dark',
  LIGHT_MODE: 'light',
} as const;

export type ColorMode = (typeof COLOR_MODE)[keyof typeof COLOR_MODE];
