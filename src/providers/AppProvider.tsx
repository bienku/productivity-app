import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../hooks/useAuth';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../styles/theme';

const AppProvider = ({ children }: { children: React.ReactNode }) => {
    return (
        <BrowserRouter>
            <AuthProvider>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    {children}
                </ThemeProvider>
            </AuthProvider>
        </BrowserRouter>
    );
};

export default AppProvider;
