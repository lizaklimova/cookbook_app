import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'modern-normalize';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from 'components/App';
import { ThemeProvider } from 'contexts/themeContext';
import { store, persistor } from './redux/store';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement as HTMLElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/cookbook_app">
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
