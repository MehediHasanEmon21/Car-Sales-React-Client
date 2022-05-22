import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Navbar from '../../components/Navbar/Navbar';
import useAuth from '../../hooks/useAuth';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import axios from 'axios';



const Checkout = () => {
  const {user} = useAuth();
  const { id } = useParams();
  const history = useHistory();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const axiosData = {
          name: data.get('name'),
          car_id: id,
          email: data.get('email'),
          phone: data.get('phone'),
          address: data.get('address')
        };
        axios.post('http://localhost:5000/order-add',axiosData)
        .then(({data}) => {
            if(data.acknowledged){
                history.push('/order-done')
            }else{
                alert('something went wrong');
            }
            
        })
        .catch(err => console.log(err))
      };
    return (
        <>
        <Navbar></Navbar>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Shipping Details
            </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="name"
                    label="Full Name"
                    name="name"
                    autoComplete="name"
                    autoFocus
                    />
                     <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={user.email}
                    />

                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="phone"
                    label="Phone No"
                    name="phone"
                    autoComplete="phone"
                    autoFocus
                    />

                    <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    autoComplete="address"
                    autoFocus
                    />
                  
                   
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    >
                    Make Order
                    </Button>
                   
                </Box>
            </Box>
      </Container>
        </>
    );
};

export default Checkout;