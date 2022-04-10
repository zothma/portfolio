import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const jsx = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React 18+
const container = document.getElementById('root');
const root = createRoot(container);
root.render(jsx);
