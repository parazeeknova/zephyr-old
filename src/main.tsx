import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Zephyr from './zephyr.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Zephyr />
  </StrictMode>
);
