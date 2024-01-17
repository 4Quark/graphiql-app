import { useLanguage } from './useLanguage';

describe('useLanguage', () => {
  test('returns the correct english translation', () => {
    const key = 'nav_welcome';

    const result = useLanguage(key);

    const expectedTranslation = 'Home';
    expect(result).toEqual(expectedTranslation);
  });

  test('returns the correct russian translation', () => {
    const key = 'nav_welcome';

    const result = useLanguage(key);

    const expectedTranslation = 'Домашняя';
    expect(result).toEqual(expectedTranslation);
  });
});
