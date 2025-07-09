import { getTextDirection } from '../textDirection';

describe('getTextDirection', () => {
  it('should return "rtl" for RTL languages', () => {
    expect(getTextDirection('arb')).toBe('rtl');
    expect(getTextDirection('fa')).toBe('rtl');
    expect(getTextDirection('pes')).toBe('rtl');
    expect(getTextDirection('tur')).toBe('rtl');
    expect(getTextDirection('urd')).toBe('rtl');
    expect(getTextDirection('prs')).toBe('rtl');
  });

  it('should return "ltr" for non-RTL languages', () => {
    expect(getTextDirection('heb')).toBe('ltr'); // Hebrew should now be 'ltr'
    expect(getTextDirection('en')).toBe('ltr');
    expect(getTextDirection('fr')).toBe('ltr');
  });

  it('should handle edge cases gracefully', () => {
    expect(getTextDirection('')).toBe('ltr'); // Empty string should default to 'ltr'
    expect(getTextDirection('unknown')).toBe('ltr'); // Unknown language should default to 'ltr'
  });
});