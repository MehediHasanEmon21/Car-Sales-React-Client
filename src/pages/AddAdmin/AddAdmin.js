import { AppBar, CssBaseline, IconButton, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Sidebar from '../../components/Drawer/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';

const drawerWidth = 240;
const AddAdmin = (props) => {
  
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
      const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };
  
     
      return (
          <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Sidebar mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle}></Sidebar>
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          <Toolbar />
          <div style={{display: 'flex', justifyContent: 'center', background: 'green', padding: '50px', borderRadius: '3px', color: 'white'}}>
            <h2>Add Admin Page is Cooming Soon</h2>
          </div>
        </Box>
      </Box> 
          </>
      );
  };

export default AddAdmin;