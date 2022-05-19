import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Car from '../../../components/Car/Car';

const Cars = () => {
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

                    <Car></Car>
                
                </Grid>
            </Container>
           
          
            
        </div>
    );
};

export default Cars;