import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './pages/Root';
import './styles/style.css';
import AppProvider from './providers/AppProvider';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AppProvider>
            <Root />
        </AppProvider>
    </React.StrictMode>
);
