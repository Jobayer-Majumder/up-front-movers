import React from 'react';
import { Link } from 'react-router-dom';


const HomeContent = (props) => {
    const { name, img } = props.data;
    return (
        <div className='col-md-3 p-4 border bg-light text-center'>
            <img className='w-50 p-3' src={img} alt="" />
            <Link to={`/destination/${name}`}><h4>{name}</h4></Link>
        </div>
    );
};

export default HomeContent;