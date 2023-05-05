import React from 'react';

import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

import MenuIcon from '@mui/icons-material/Menu';

interface HeaderProps {
    handleDrawerToggle: () => void;
    drawerWidth: number;
}

const Header: React.FC<HeaderProps> = ({ handleDrawerToggle, drawerWidth }) => {
    return (
        <AppBar
            position="fixed"
            sx={{
                width: { md: `calc(100% - ${drawerWidth}px)` },
                ml: { md: `${drawerWidth}px` },
            }}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ mr: 2, display: { md: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap component="div">
                    Productivity
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
