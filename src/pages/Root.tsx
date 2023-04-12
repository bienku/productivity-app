import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../styles/theme';
import Register from './Register';
import Login from './Login';

const UnauthenticatedApp = () => {
    return (
        <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};

const Root = () => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <UnauthenticatedApp />
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default Root;
