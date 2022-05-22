import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Car from '../../../components/Car/Car';


const Cars = () => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/car-short')
        .then(({data}) => setCars(data))
        .catch(err => console.log(err))
    },[])
    return (
        <div>
            <Container>
                <Box sx={{textAlign: 'center', marginTop: '100px'}}>
                    <Typography variant="p" sx={{color: '#1089ff', fontWeight: '700'}}>
                        WHAT WE OFFER
                    </Typography>
                    <Typography sx={{marginBottom: '20px', fontWeight: '600'}} variant="h3">
                        Feeatured Vehicles
                    </Typography>
                </Box>
    
                <Grid container spacing={2}>

                   {cars.map((car) => <Car car={car} key={car._id}></Car>)}
                
                </Grid>
            </Container>
           
          
            
        </div>
    );
};

export default Cars;