import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser] = useContext(UserContext)
    const {service} = useParams()
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <Link className="navbar-brand" to="/home">UpFront Movers</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link className="nav-link active" to="/home">Home <span className="sr-only">(current)</span></Link>
                    <Link className='nav-link' to={`/destination/${service}`}>Destination</Link>
                    <Link className="nav-link" to="/blog">Blog</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                    <Link to='/login'><button className="btn btn-info">{loggedInUser.email ? loggedInUser.displayName : 'Login'}</button></Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;