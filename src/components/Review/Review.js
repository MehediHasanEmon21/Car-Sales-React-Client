import React from 'react';
import { Avatar, Box, Button, Card, CardActionArea, CardActions, CardContent, Grid, Typography } from '@mui/material';
const Review = () => {
    return (
        <>
            
            <Grid item lg={4} md={6} sm={12} xs={12}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <Box sx={{display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>
                                    <Avatar
                                    alt="Remy Sharp"
                                    src="https://preview.colorlib.com/theme/carbook/images/xperson_1.jpg.pagespeed.ic.a2MnMHMs44.webp"
                                    sx={{ width: 100, height: 100 }}
                                    />
                                </Box>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Roger Scott
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                                
                                </CardContent>
                                
                            </CardActionArea>
                            <CardActions sx={{textAlign: 'center'}}>
                                
                                <Button size="small" color="primary">
                                    UX Designer
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <Box sx={{display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>
                                    <Avatar
                                    alt="Remy Sharp"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                                    sx={{ width: 100, height: 100 }}
                                    />
                                </Box>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Sumer Monn
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                                
                                </CardContent>
                                
                            </CardActionArea>
                            <CardActions sx={{textAlign: 'center'}}>
                                
                                <Button size="small" color="primary">
                                    Product Designer
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item lg={4} md={6} sm={12} xs={12}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea>
                                <Box sx={{display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>
                                    <Avatar
                                    alt="Remy Sharp"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqZZYSsnncqDhroX4Ud9rgHCxpDeyLSN5PdG71BuDAk-ulL4CQCFtjL4lKVH26UIW9EOo&usqp=CAU"
                                    sx={{ width: 100, height: 100 }}
                                    />
                                </Box>
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    Shane Pay
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                                
                                </CardContent>
                                
                            </CardActionArea>
                            <CardActions sx={{textAlign: 'center'}}>
                                
                                <Button size="small" color="primary">
                                    Software Engineer
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
        </>
    );
};

export default Review;