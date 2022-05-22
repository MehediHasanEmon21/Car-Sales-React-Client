import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Detail = () => {
    const { id } = useParams();
    const [car, setCar] = useState({});
    useEffect(() => {
        axios.get(`http://localhost:5000/car/${id}`)
        .then(({data}) => setCar(data))
        .catch(error => console.log(error))
    },[]);
    return (
        <>
       
            <Navbar></Navbar>
            <Container>
                <Box sx={{textAlign: 'center', marginTop: '70px'}}>
                    <Typography sx={{marginBottom: '20px', fontWeight: '600'}} variant="h3">
                        {car.brand}
                    </Typography>
                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={2} md={2}>
                        
                    </Grid>
                    <Grid item xs={12} lg={8} md={8} sx={{display: 'flex', justifyContent: 'center'}}>
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={car.photo}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            {car.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            {car.details}
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                              Price : {car.price} 
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                              Seat : {car.seats} 
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                              Mileage : {car.mileage} 
                            </Typography>
                            <Typography variant="h5" color="text.secondary">
                              Fuel : {car.fuel} 
                            </Typography>
                        </CardContent>
                        {/* <CardActions>
                            <Button size="small">Share</Button>
                            <Button size="small">Learn More</Button>
                        </CardActions> */}
                        </Card>
                    </Grid>
                    <Grid item xs={12} lg={2} md={2}>
                        
                    </Grid>
                </Grid>

            </Container>
        </>
    );
};

export default Detail;