import React from 'react'
import "./NavBar.css";
import { RiMenuFoldFill, RiCloseFill } from "react-icons/ri"
import { Link } from 'react-router-dom';

const NavBar = () => {

    const responsive = ()=>{
        
    }
    return (
        <div className='nav-container'>
            <div className='nav-bar'>
            <div className='logo'><Link className='link-path' to='/'>Room Services</Link></div>
                <div>
                
                    <ul className='nav-links' onClick={responsive}> 
                        <li><Link className='link-path' to='/'>Home</Link></li>
                        <li><Link className='link-path' to='/bedspace'>Bed Space</Link></li>
                        <li><Link className='link-path' to='/reservations'>Reservations</Link></li>
                        <li className='nav-icons drop-down'><RiMenuFoldFill/></li>
                    <li className='nav-icons close-dropDown'><RiCloseFill /></li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default NavBar