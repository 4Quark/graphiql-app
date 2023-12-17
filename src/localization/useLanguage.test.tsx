import { useLanguage } from './useLanguage';

describe('useLanguage', () => {
  test('returns the correct english translation', () => {
    const key = 'nav_welcome';
    const lang = 'en';

    const result = useLanguage(key, lang);

    const expectedTranslation = 'Home';
    expect(result).toEqual(expectedTranslation);
  });

  test('returns the correct russian translation', () => {
    const key = 'nav_welcome';
    const lang = 'ru';

    const result = useLanguage(key, lang);

    const expectedTranslation = 'Домашняя';
    expect(result).toEqual(expectedTranslation);
  });
});
