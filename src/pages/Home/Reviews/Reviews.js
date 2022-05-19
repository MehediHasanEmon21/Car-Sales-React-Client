import {  Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Review from '../../../components/Review/Review';

const Reviews = () => {
    return (
        <>
            <Container sx={{textAlign: 'center', marginTop: '100px', marginBottom: '100px'}}>
                <Box>
                    <Typography variant="p" sx={{color: '#1089ff', fontWeight: '700'}}>
                        Reviews
                    </Typography>
                    <Typography sx={{marginBottom: '20px', fontWeight: '600'}} variant="h3">
                        Our Clients
                    </Typography>
                </Box>

                <Grid container spacing={2}>
                    <Review></Review>
                </Grid>
                
            </Container>
        </>
    );
};

export default Reviews;