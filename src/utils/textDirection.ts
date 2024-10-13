const RTL_LANGUAGES = ['arb', 'heb', 'fa'];

export function getTextDirection(language: string): 'rtl' | 'ltr' {
  return RTL_LANGUAGES.includes(language) ? 'rtl' : 'ltr';
}
