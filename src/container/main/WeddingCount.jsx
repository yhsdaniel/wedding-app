import React from 'react';
import '../css/WeddingCount.css';
import bottom from '../image/bottom.png';
import CountdownTimer from '../main/CountDownTimer';

const WeddingCount = () => {
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

    return (
        <div className='WeddingCount'>
            <img src={bottom} alt="bottom" />
            <h1>Countdown</h1>
            <span className='f-txt-countdown'>A beautiful app for consectetur adipisicing elit, sed do eiusmod tempor incididunt ut mollit anim id est laborum. Sedut perspiciatis unde omnis.</span>
            <div className='container'>
                <CountdownTimer targetDate={dateTimeAfterThreeDays} />
            </div>
        </div>
    )
}

export default WeddingCount