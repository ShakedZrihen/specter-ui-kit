import { getTextDirection } from '../textDirection';

describe('getTextDirection', () => {
  it('should return "rtl" for RTL languages', () => {
    const rtlLanguages = ['arb', 'fa', 'pes', 'tur', 'urd', 'prs'];
    rtlLanguages.forEach(language => {
      expect(getTextDirection(language)).toBe('rtl');
    });
  });

  it('should return "ltr" for non-RTL languages', () => {
    const nonRtlLanguages = ['heb', 'en', 'fr', 'de'];
    nonRtlLanguages.forEach(language => {
      expect(getTextDirection(language)).toBe('ltr');
    });
  });
});