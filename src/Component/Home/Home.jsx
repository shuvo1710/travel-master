import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Carousel from '../Carousel/Carousel';
import './Home.css'
import travelIcon from './124537-explore-world.gif'

const Home = () => {
    // const items = useLoaderData()
    // console.log(items)

    return (
        <div className=' lg:grid grid-cols-2 '>
            <div className=' text-center'>
                <img src={travelIcon} alt="" />
            </div>
            <div className='mt-5 lg:mt-20'>
            
           <Carousel></Carousel>
            
            </div>
        </div>
        
        
        
    );
};

export default Home;