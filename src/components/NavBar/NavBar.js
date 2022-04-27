import React from 'react'
import "./NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-bar'>
            <div className='logo'><Link className='link-path' to='/'>Room Services</Link></div>
                <div>
                    <ul className='nav-links'>
                        <li><Link className='link-path' to='/'>Home</Link></li>
                        <li><Link className='link-path' to='/bedspace'>Bed Space</Link></li>
                        <li><Link className='link-path' to='/reservations'>Reservations</Link></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default NavBar