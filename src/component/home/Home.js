import React from 'react';
import fakeData from '../../fakeData/data.json';
import HomeContent from '../homeContent/HomeContent';

const filteredData = fakeData.filter(data => data.code);

const Home = () => {

    return (
        <div className='justify-content-center align-items-center d-flex' style={{height:'600px', background: 'antiquewhite'}}>
            <div className="container row m-auto ">
                {
                    filteredData.map(data => <HomeContent key={data.price} data={data} />)
                }
            </div>
        </div>
    );
};

export default Home;