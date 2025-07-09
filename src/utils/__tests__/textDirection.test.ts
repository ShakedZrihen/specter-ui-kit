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
    expect(getTextDirection('heb')).toBe('ltr');
    expect(getTextDirection('en')).toBe('ltr');
    expect(getTextDirection('fr')).toBe('ltr');
  });

  it('should handle unknown languages as "ltr"', () => {
    expect(getTextDirection('unknown')).toBe('ltr');
  });
});