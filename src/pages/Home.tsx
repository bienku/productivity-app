import React from 'react';
import useAuth from '../hooks/useAuth';
import { Typography } from '@mui/material';

const Home = () => {
    const { signOut } = useAuth();

    return (
        <div>
            <Typography variant="h1">Home</Typography>

            <a href="/" onClick={signOut}>
                Logout
            </a>
        </div>
    );
};

export default Home;
