import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import './Home.css'

const Home = () => {
    // const items = useLoaderData()
    // console.log(items)

    return (

        <div className='grid grid-cols-2 '>
            <div className=' text-center'>
                <h1 className='text-5xl font-bold mt-5 text-center text-white'>COX'S BAZAR</h1>
                <br />
                <p className='px-20 text-white'>Cox's bazae is a city. Fishing port tourism center and district headquarters in mostly for its long natural sandy beach</p>
            </div>
            <div>
            
           <Carousel></Carousel>
            
            </div>
        </div>
        
        
        
    );
};

export default Home;