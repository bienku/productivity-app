import React, { useState } from 'react';
import Header from '../organisms/Header/Header';
import Navbar from '../organisms/Navbar/Navbar';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const drawerWidth = 240;

const MainTemplate = ({ children }: { children: React.ReactNode }) => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    return (
        <Container maxWidth={false} sx={{ maxWidth: '1800px' }}>
            <Box sx={{ display: 'flex' }}>
                <Header handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} />
                <Navbar handleDrawerToggle={handleDrawerToggle} drawerWidth={drawerWidth} mobileOpen={mobileOpen} />
                {children}
            </Box>
        </Container>
    );
};

export default MainTemplate;
