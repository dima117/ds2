import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import './theme.scss';

document.getElementById('toggle')?.addEventListener('click', () => {
    document.body.classList.toggle('Theme_light');
    document.body.classList.toggle('Theme_dark');
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
