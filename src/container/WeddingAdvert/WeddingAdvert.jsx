import React from 'react';
import './WeddingAdvert.css';
import bottom from './bottom.png';
import { FontAwesomeIcon } from '../node_modules/@fontawesome/react-fontawesome';
import {  faFacebookF, faTwitter, faInstagram } from '../node_modules/@fontawesome/free-brands-svg-icons';

const WeddingAdvert = () => {
    return (
        <div className='WeddingAdvert'>
            <img src={bottom} alt="bottom" />
            <h1>Are You Attending</h1>
            <span className='span'>A beautiful app for consectetur adipisicing elit, sed do eiusmod tempor incididunt ut mollit anim id est laborum. Sedut perspiciatis unde omnis.</span>
            <div className='container-input'>
                <input type="text" className='input' placeholder='Please Enter Your Email Address'/>
                <input type="button" className='button' value='Send Me'/>
            </div>
            <div className='container-footer'>
                <div className='grid'>
                    <FontAwesomeIcon icon={faFacebookF} className='icon'/>
                    <FontAwesomeIcon icon={faTwitter} className='icon'/>
                    <FontAwesomeIcon icon={faInstagram} className='icon'/>
                </div>
                <div className='grid'>
                    <span>Home</span>
                    <span>About</span>
                    <span>Schedule</span>
                    <span>Pricelist</span>
                </div>
                <div className='grid'>
                    <span> 2020 Dans Powered By Daniel</span>
                </div>
            </div>
        </div>
    )
}

export default WeddingAdvert