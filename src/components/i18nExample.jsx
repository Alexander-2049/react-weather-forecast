import { useTranslation } from 'react-i18next';

const I18nExample = () => {
    const { t, i18n } = useTranslation();

    return (
        <div>
            {t('greeting')}
            <hr/>
            {t('buttonLabel')}
            <hr/>
            {t('doesnt exist')}
            <hr/>
            <button onClick={() => { i18n.changeLanguage('en'); }}>English</button>
            <button onClick={() => { i18n.changeLanguage('fr'); }}>French</button>
            <button onClick={() => { i18n.changeLanguage('ru'); }}>Russian</button>
            <button onClick={() => { i18n.changeLanguage('ruBlyat'); }}>ruBlyat</button>
        </div>
    );
};

export default I18nExample;