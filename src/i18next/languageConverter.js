function languageConverter(language) {
    if(!language) return "en";

    const languageMappings = {
      en: ["en", "en-US", "en-EG", "en-AU", "en-GB", "en-CA", "en-NZ", "en-IE", "en-ZA", "en-JM", "en-BZ", "en-TT"],
      ru: ["ru", "ru-MI", "ru-RU"],
    };
  
    for (const [key, value] of Object.entries(languageMappings)) {
      if (value.includes(language)) {
        return key;
      }
    }
  
    return "en";
  }

export default languageConverter;