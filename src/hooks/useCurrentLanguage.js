import { useTranslation } from 'react-i18next';

const useCurrentLanguage = () => {
  const { i18n } = useTranslation();

  if (!i18n) {
    throw new Error('useCurrentLanguage must be used within an I18nextProvider');
  }

  const currentLanguage = i18n.language;

  return currentLanguage;
};

export default useCurrentLanguage;