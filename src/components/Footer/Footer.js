import { Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import './Footer.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box sx={{background: 'black', paddingTop: '100px', paddingBottom: '100px', color: 'white'}}>
           <Container>
               
                <Grid container spacing={2}>
                    <Grid item lg={3} md={6} sm={12} xs={12}>
                        <Typography variant="h6" sx={{fontWeight: '700', marginBottom: '20px'}}>
                            CAR<span style={{color: '#01d28e'}}>BOOK</span>
                        </Typography>
                        <Typography variant="p">
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                        </Typography>
                        <Box sx={{marginTop: '50px'}}>
                            <FacebookIcon sx={{marginRight: '10px', fontSize: '30px'}}/> <TwitterIcon sx={{marginRight: '10px', fontSize: '30px'}}/> <InstagramIcon sx={{fontSize: '30px'}}/>
                        </Box>
                    </Grid>
                    <Grid item lg={3} md={6} sm={12} xs={12}>
                        <Typography variant="h6" sx={{fontWeight: '500', marginBottom: '20px'}}>
                            Information
                        </Typography>
                        <ul className="footer-list">
                            <li>About</li>
                            <li>Services</li>
                            <li>Term and Conditions</li>
                            <li>Best Price Guarantee</li>
                            <li>Privacy & Cookies Policy</li>
                        </ul>
                    </Grid>
                    <Grid item lg={3} md={6} sm={12} xs={12}>
                    <Typography variant="h6" sx={{fontWeight: '500', marginBottom: '20px'}}>
                            Customer Support
                        </Typography>
                        <ul className="footer-list">
                            <li>FAQ</li>
                            <li>Payment Option</li>
                            <li>Booking Tips</li>
                            <li>How it works</li>
                            <li>Contact Us</li>
                        </ul>
                    </Grid>
                    <Grid item lg={3} md={6} sm={12} xs={12}>
                        <Typography variant="h6" sx={{fontWeight: '500', marginBottom: '20px'}}>
                        Have a Questions?
                        </Typography>
                        <ul className="footer-list">
                            <li><LocationOnIcon sx={{marginRight: '10px', fontSize: '15px'}}/> 203 Fake St. Mountain View, San Francisco, California, USA</li>
                            <li><LocalPhoneIcon sx={{marginRight: '10px', fontSize: '15px'}}/> +2 392 3929 210</li>
                            <li><EmailIcon sx={{marginRight: '10px', fontSize: '15px'}}/> info@yourdomain.com</li>
                        </ul>
                    </Grid>
                </Grid>

                <Box>
                    <Typography variant="h6" sx={{marginTop: '50px',textAlign: 'center', fontSize: '13px'}}>
                        Copyright ©2022 All rights reserved | This template is made with  by Emon
                    </Typography>
                </Box>
                
            </Container>

        </Box>
    );
};

export default Footer;