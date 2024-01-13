import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './assets/styles/GlobalStyles';
import App from './components/App';
import 'modern-normalize';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/cookbook_app">
      {/* <ThemeProvider> */}
      <GlobalStyles />
      <App />
      {/* </ThemeProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
