import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const OrderDone = () => {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px'}}>
                <img style={{width: '80%', height: '400px'}} src="https://static.vecteezy.com/system/resources/previews/002/524/615/original/online-payment-and-successful-purchase-concept-girl-woman-rejoices-in-success-and-confirmation-of-order-buying-things-and-goods-in-an-online-store-on-smartphone-vector.jpg" alt="" />
            </div>
            <div style={{textAlign: 'center'}}>
                <Link to="/home" className="link-style">
                    <Button  variant="contained" color="success" >Go To Home</Button>
                </Link>
            </div>
        </>
        
    );
};

export default OrderDone;