import React from 'react';
import './Navbar.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
            <Toolbar>
                <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                >
                <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/" className="link-style">Car Rental</Link>
                </Typography>
                <Link to="/login" className="link-style" >
                    <Button color="inherit">Login</Button>
                </Link>
                <Link to="/register" className="link-style" >
                    <Button  color="inherit">Register</Button>
                </Link>
            </Toolbar>
            </AppBar>
        </Box>
        </>
    );
};

export default Navbar;