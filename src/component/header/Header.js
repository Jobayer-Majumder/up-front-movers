import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser] = useContext(UserContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/home">UpFront Movers</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <a className="nav-link active" href="/home">Home <span className="sr-only">(current)</span></a>
                    <a className='nav-link' href='/home'>Destination</a>
                    <a className="nav-link" href="/home">Blog</a>
                    <a className="nav-link" href="/home">Contact</a>
                    <Link to='/login'><button className="btn btn-info">{loggedInUser.email ? loggedInUser.displayName : 'Login'}</button></Link>
                </div>
            </div>
        </nav>
    );
};

export default Header;