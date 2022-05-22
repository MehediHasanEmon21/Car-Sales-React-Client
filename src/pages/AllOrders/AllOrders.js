import { AppBar, CssBaseline, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Sidebar from '../../components/Drawer/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import Paper from '@mui/material/Paper';

const drawerWidth = 240;
const AllOrders = (props) => {
  
    const [mobileOpen, setMobileOpen] = React.useState(false);
    
      const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

    const [orders, setOrders] = useState([]);
    const {user} = useAuth();
    useEffect(()=> {
        axios.get(`http://localhost:5000/all-orders/${user.email}`)
        .then(({data}) => {
          console.log(data);
          setOrders(data)
        })
        .catch(err => console.log(err))
    },[]);
  
     
      return (
          <>
      <Box sx={{ display: 'flex', marginTop: '50px' }}>
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
          <TableContainer  component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Car Id</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            

            {orders.map((order) => (
            <TableRow
              key={order._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {order._id}
              </TableCell>
              <TableCell align="right">{order.name}</TableCell>
              <TableCell align="right">{order.car_id}</TableCell>
              <TableCell align="right">{order.email}</TableCell>
              <TableCell align="right">{order.phone}</TableCell>
              <TableCell align="right">{order.address}</TableCell>
            </TableRow>
          ))}
           
         
        </TableBody>
      </Table>
    </TableContainer>
          
        </Box>
      </Box> 
          </>
      );
  };

export default AllOrders;