const RTL_LANGUAGES = ['ara', 'heb'];

export function getTextDirection(language: string): 'rtl' | 'ltr' {
  return RTL_LANGUAGES.includes(language) ? 'rtl' : 'ltr';
}
