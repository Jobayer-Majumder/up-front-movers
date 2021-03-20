import React from 'react';
import { Link } from 'react-router-dom';


const HomeContent = (props) => {
    const { name, img } = props.data;
    return (
        <div>
            <div className="container">
                <img className='w-75' src={img} alt="" />
                <Link to={`/destination/${name}`}><h4>{name}</h4></Link>
            </div>
        </div>
    );
};

export default HomeContent;