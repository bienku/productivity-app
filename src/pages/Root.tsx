import { Navigate, Route, Routes } from 'react-router-dom';
import Register from './Register';
import useAuth from '../hooks/useAuth';
import Login from './Login';
import Home from './Home';

const AuthenticatedApp = () => (
    <Routes>
        <Route path="/register" element={<Navigate to="/" replace />} />
        <Route path="/login" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Home />} />
    </Routes>
);

const UnauthenticatedApp = () => (
    <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
);

const Root = () => {
    const { currentUser } = useAuth();

    return currentUser ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
