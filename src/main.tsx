import i18next from 'i18next';
import { createRoot } from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import App from './App';
import { LanguageEnum } from './common/common.enum';
import './index.css';
import enTranslation from './translations/en.json';
import viTranslation from './translations/vi.json';

i18next.init({
  interpolation: { escapeValue: false },
  lng: LanguageEnum.VI,
  defaultNS: 'common',
  resources: {
    [LanguageEnum.VI]: {
      common: viTranslation
    },
    [LanguageEnum.EN]: {
      common: enTranslation
    }
  }
});
const rootElement = document.getElementById('root');
const root = createRoot(rootElement!);
root.render(
  <I18nextProvider i18n={i18next}>
    <App />
  </I18nextProvider>
);
