import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyles } from './assets/styles/GlobalStyles';
import App from 'components/App';
import 'modern-normalize';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
  <StrictMode>
    <BrowserRouter basename="/cookbook_app">
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </StrictMode>
);
