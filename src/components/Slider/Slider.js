import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { height } from '@mui/system';

const Slider = () => {

    return (
        <Carousel showThumbs={false} autoPlay={true} style={{'height': '300px'}}>
            <div>
                <img alt="" src="https://preview.colorlib.com/theme/carbook/images/xbg_1.jpg.pagespeed.ic.FipmtwhyJE.webp" />
            </div>
            <div>
                <img alt="" src="https://preview.colorlib.com/theme/carbook/images/xbg_1.jpg.pagespeed.ic.FipmtwhyJE.webp" />
            </div>
            <div>
                <img alt="" src="https://preview.colorlib.com/theme/carbook/images/xbg_1.jpg.pagespeed.ic.FipmtwhyJE.webp" />
            </div>
        </Carousel>
    );
};

export default Slider;