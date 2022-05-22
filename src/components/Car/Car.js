import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const Car = (props) => {
    const {_id, photo, details, name} = props.car
    return (
        <>
           <Grid item lg={3} md={6} sm={12} xs={12}>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={photo}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {details}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{display: 'flex', justifyContent: 'space-between' }}>
                        <Link to={`checkout/${_id}`} className="link-style">
                            <Button variant="contained" color="success">Buy Now</Button>
                        </Link>
                        <Link to={`detail/${_id}`} className="link-style">
                            <Button variant="contained" color="primary">Details</Button>
                        </Link>
                    </CardActions>
                </Card>
            </Grid>

                       
        </>
    );
};

export default Car;