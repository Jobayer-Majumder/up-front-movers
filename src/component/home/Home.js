import React, { useState } from 'react';
import bg from '../../images/Bg.png'
// import bike from '../../images/Frame.png'
// import car from '../../images/Frame-1.png'
// import bus from '../../images/Frame-2.png'
// import train from '../../images/Frame-3.png'
import fakeData from '../../fakeData/data.json';
import HomeContent from '../homeContent/HomeContent';

const filteredData = fakeData.filter(data => data.img);

const Home = () => {
    
    return (
        <div style={{ background: `url(${bg})`, backgroundSize: '100% 100%', height: '500px' }} className='d-flex justify-content-center align-items-center'>
            {
                filteredData.map(data => <HomeContent key={data.price} data={data} />)
            }
        </div>
    );
};

export default Home;