import { createContext, useState, useEffect } from "react";
import i18n from "@/plugins/lang/i18n";

interface I18nContextType {
  t: (scope: string, options?: Record<string, any>) => string;
  locale: string;
  setLocale: (locale: string) => void;
}

const LocaleContext = createContext<I18nContextType>({
  t: i18n.t,
  locale: i18n.locale,
  setLocale: () => {},
});

const I18nProvider = (props: any) => {
  const [locale, setLocale] = useState<string>(i18n.locale);

  const localeValue = {
    t: i18n.t,
    locale,
    setLocale,
  };

  useEffect(() => {
    i18n.locale = locale;
  }, [locale]);

  return <LocaleContext.Provider value={localeValue} {...props} />;
};

export { LocaleContext, I18nProvider };
