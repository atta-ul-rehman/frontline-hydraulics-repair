import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import * as ReactHelmetAsync from 'react-helmet-async';
const HelmetProvider = ReactHelmetAsync.HelmetProvider || (ReactHelmetAsync as any).default?.HelmetProvider;
import App from './App';
import './index.css';

const rootElement = document.getElementById('root')!;

const MainApp = (
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

// If there's already HTML (from our prerender), hydrate it.
if (rootElement.hasChildNodes()) {
  ReactDOM.hydrateRoot(rootElement, MainApp);
} else {
  ReactDOM.createRoot(rootElement).render(MainApp);
}