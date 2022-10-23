import React, { useEffect, useState } from "react";
import Carousel2 from "./Carousel2/Carousel2";

const Carousel = () => {
  const [items,setItems] = useState([]) 
  useEffect(()=>{
      fetch('http://localhost:5000/hotels')
      .then(res=>res.json())
      .then(data=>setItems(data))
  },[])

    return (
      <div>
        <Carousel2 items={items}></Carousel2>
    </div>
    );
};

export default Carousel;