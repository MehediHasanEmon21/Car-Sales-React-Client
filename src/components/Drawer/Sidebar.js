import { Box, Divider, Drawer, List, ListItem, ListItemButton, Toolbar } from '@mui/material';
import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { useHistory } from 'react-router-dom';

const drawerWidth = 240;



const Sidebar = (props) => {
    const {logOut} = useAuth();
    const history = useHistory();
    const { window } = props;
    const menu = [
      {
        name: 'Payment', url: '/payment'
      },
      {
        name: 'My Orders', url: '/all-orders'
      },
      {
        name: 'Make Admin', url: '/add-admin'
      },

        
      
  ];

    const container = window !== undefined ? () => window().document.body : undefined;
    const drawer = (
        <div>
          <Toolbar />
          <Divider />
          <List>
            {menu.map((text, index) => (
              <ListItem className="link-style" style={{color: 'black'}} key={text} disablePadding as={Link} to={text.url} >
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => logOut(history)}>
              <ListItemIcon>
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
        </div>
      );
    return (
        <>
           <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
            aria-label="mailbox folders"
        >
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
            container={container}
            variant="temporary"
            open={props.mobileOpen}
            onClose={props.handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
            <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            open
            >
            {drawer}
            </Drawer>
      </Box> 
        </>
    );
};

export default Sidebar;