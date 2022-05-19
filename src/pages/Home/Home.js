import React from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
// import Slider from '../../components/Slider/Slider';
import Cars from './Cars/Cars';
import Reviews from './Reviews/Reviews';





const Home = () => {


    return (
      <>
        <Navbar></Navbar>
        {/* <Slider></Slider> */}
        <Cars></Cars>
        <Reviews></Reviews>
        <Footer></Footer>
      </>
    );
};

export default Home;