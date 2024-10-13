const RTL_LANGUAGES = ['arb', 'heb', 'fa', 'pes', 'tur', 'urd', 'prs'];

export function getTextDirection(language: string): 'rtl' | 'ltr' {
  return RTL_LANGUAGES.includes(language) ? 'rtl' : 'ltr';
}
