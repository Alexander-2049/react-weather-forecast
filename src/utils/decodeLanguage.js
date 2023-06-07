function decodeLanguage(code) {
    const languages = {
        "en": "english",
        "ru": "русский",
        "fr": "français",
        "es": "español",
        "de": "deutsch",
        "it": "italiano",
        "ja": "日本語",
        "ko": "한국어",
        "pt": "português",
        "zh": "中文",
        "ar": "العربية",
        "hi": "हिन्दी",
        "bn": "বাংলা",
        "nl": "nederlands",
        "pl": "polski",
        "sv": "svenska",
        "no": "norsk",
        "fi": "suomi",
        "da": "dansk",
        "tr": "türkçe",
        "he": "עברית",
        "th": "ไทย",
        "cs": "čeština",
        "uk": "українська",
        "hu": "magyar",
        "el": "ελληνικά",
        "id": "bahasa indonesia",
        "ro": "română",
        "vi": "tiếng việt",
        "fa": "فارسی",
        "ms": "bahasa melayu",
        // Add more languages here
    }

    if (languages[code]) return languages[code];
    return code;
}

export default decodeLanguage;
