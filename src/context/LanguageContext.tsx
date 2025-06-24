"use client";
import { useMemo, createContext, useContext, useState } from 'react';
import id from '@/i18n/id';
import en from '@/i18n/en';

const languages = { id, en };
type LangKey = 'id' | 'en';

const LanguageContext = createContext<{
    lang: LangKey;
    setLang: (lang: LangKey) => void;
    t: typeof id;
}>({
    lang: 'en',
    setLang: () => { },
    t: en,
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [lang, setLang] = useState<LangKey>('en');
    const t = languages[lang];

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const value = useMemo(() => ({ lang, setLang, t }), [lang]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);