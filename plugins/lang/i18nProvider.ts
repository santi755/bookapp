import { createContext, useState, useEffect, ReactNode } from 'react';
import i18n from '@/plugins/lang/i18n';

interface I18nContextType {
    t: (scope: string, options?: Record<string, any>) => string;
    locale: string;
    setLocale: (locale: string) => void;
  }

const I18nContext = createContext<I18nContextType | undefined>(undefined);


export const I18nProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocale] = useState<string>(i18n.locale);

    useEffect(() => {
      i18n.locale = locale;
    }, [locale]);

    const value: I18nContextType = {
      t: (scope: string, options = {}) => i18n.t(scope, { locale, ...options }),
      locale,
      setLocale,
    };

    return (
      <I18nContext.Provider value={value}>
        {children}
      </I18nContext.Provider>
    );
};