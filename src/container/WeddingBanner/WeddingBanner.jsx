import React, { Fragment } from 'react';
import './WeddingBanner.css';
import girl from './Girl.png';
import logo from './Logo_Dans.png';
import Header from '../Header/Header';

const WeddingBanner = () => {
    return (
        <Fragment>
            <Header />
            <div className='WeddingBanner'>
                <div className='left-side-banner'>
                    <img src={girl} alt="girl" />
                </div>
                <div className='right-side-banner'>
                    <div className='banner-first'>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className='banner-second'>
                        <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim repudiandae deleniti odio velit dolore.</span>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default WeddingBanner