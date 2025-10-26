import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { MyEdSpaceApp } from './app';
import { Auth_provider } from './contexts/auth_context';

import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth_provider>
      <MyEdSpaceApp />
    </Auth_provider>
  </StrictMode>
);
