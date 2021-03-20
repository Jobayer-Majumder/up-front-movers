import React, { useState } from 'react';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fakeData from '../../fakeData/data.json';
import map from '../../images/Map.png';
import { faDollarSign, faUserFriends } from '@fortawesome/free-solid-svg-icons';



const Booking = () => {
    const { service } = useParams();
    const [services, setServices] = useState([])

    const handleSearch = () => {
        const filteredData = fakeData.filter(data => data.name === service)
        // console.log(filteredData)
        setServices(filteredData)
    }
    return (
        <div className=''>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-4 border p-3 bg-light">
                        <label htmlFor="from">Pick From</label>
                        <input className='form-control' type="text" name="" id="from" placeholder='Gulshan' />
                        <label htmlFor="to">Pick To</label>
                        <input className='form-control' type="text" name='' id='to' placeholder='Uttara' />
                        <label htmlFor="start">Start date:</label>
                        <input className='form-control' type="date" id="start" name="trip-start"
                            placeholder="2018-07-22"
                            min="2018-01-01" max="2018-12-31"></input>
                        <button onClick={handleSearch} className="btn btn-info my-3 w-100">Search</button>
                        <div>
                            {
                                services.map(data => <div className='d-flex justify-content-around align-items-center p-3 border hover'>
                                    <img className='w-25' src={data.img} alt=""/>
                                    <p>{data.name}</p>
                                    <p><FontAwesomeIcon icon={faUserFriends} /> {data.seat}</p>
                                    <p><FontAwesomeIcon icon={faDollarSign} /> {data.price}</p>
                                </div>)
                            }
                        </div>
                    </div>
                    <div className="col-md-8">
                        <img src={map} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;