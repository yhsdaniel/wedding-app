import React from 'react';
import '../css/Header.css'
import logo from '../image/7.png'

const Header = () => {
    return (
        <div className='Header'>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <input type="checkbox" id="active" />
            <label for="active" class="menu-btn"><span></span></label>
            <label for="active" class="close"></label>
            {/* <ul>
                <li>Home</li>
                <li>About</li>
            </ul>
            <div className='logo'>
                <img src={logo} alt="logo" />
            </div>
            <ul>
                <li>Schedule</li>
                <li>Pricelist</li>
            </ul> */}
            <div class="wrapper">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Schedule</a></li>
                    <li><a href="#">Pricelist</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header