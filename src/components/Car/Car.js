import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
const Car = () => {
    return (
        <>
           <Grid item lg={3} md={6} sm={12} xs={12}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image="https://preview.colorlib.com/theme/carbook/images/xcar-1.jpg.pagespeed.ic.3W271Wsyg-.webp"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Mercedes Grand Sedan
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lizards are a widespread group of squamate reptiles, with over 6,000
                            species, ranging across all continents except Antarctica
                        </Typography>
                    </CardContent>
                    <CardActions sx={{display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant="contained" color="success">Buy Now</Button>
                        <Button variant="contained" color="primary">Details</Button>
                    </CardActions>
                    </Card>
                </Grid>

                    <Grid item lg={3} md={6} sm={12} xs={12}>
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://preview.colorlib.com/theme/carbook/images/xcar-1.jpg.pagespeed.ic.3W271Wsyg-.webp"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Mercedes Grand Sedan
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions sx={{display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="contained" color="success">Buy Now</Button>
                            <Button variant="contained" color="primary">Details</Button>
                        </CardActions>
                        </Card>
                    </Grid>

                    <Grid item lg={3} md={6} sm={12} xs={12}>
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://preview.colorlib.com/theme/carbook/images/xcar-1.jpg.pagespeed.ic.3W271Wsyg-.webp"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Mercedes Grand Sedan
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions sx={{display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="contained" color="success">Buy Now</Button>
                            <Button variant="contained" color="primary">Details</Button>
                        </CardActions>
                        </Card>
                    </Grid>

                    <Grid item lg={3} md={6} sm={12} xs={12}>
                        <Card sx={{ maxWidth: 345 }}>
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height="140"
                            image="https://preview.colorlib.com/theme/carbook/images/xcar-1.jpg.pagespeed.ic.3W271Wsyg-.webp"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Mercedes Grand Sedan
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                                species, ranging across all continents except Antarctica
                            </Typography>
                        </CardContent>
                        <CardActions sx={{display: 'flex', justifyContent: 'space-between' }}>
                            <Button variant="contained" color="success">Buy Now</Button>
                            <Button variant="contained" color="primary">Details</Button>
                        </CardActions>
                        </Card>
                    </Grid>     
        </>
    );
};

export default Car;