import React, { useState } from 'react';
import './Header.css'
import logo from './7.png'

const Header = () => {
    return (
        <div className='Header'>
            <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <ul>
                <li>Schedule</li>
                <li>Pricelist</li>
            </ul>
        </div>
    )
}

export default Header