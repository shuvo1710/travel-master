import React from 'react';
import { useLoaderData } from 'react-router-dom';
import RoomServiceCard from '../RoomServiceCard/RoomServiceCard';

const RoomService = () => {
    const datas = useLoaderData()
    return (
        <div className='grid grid-cols-2'>
            <div>
            {datas?.hotels?.map(data=><RoomServiceCard 
            key={data.id}
            data={data}
            ></RoomServiceCard>)}
            </div>
            <div></div>
        </div>
    );
};

export default RoomService;