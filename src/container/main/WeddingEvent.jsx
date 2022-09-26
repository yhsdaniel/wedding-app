import React from 'react';
import '../css/WeddingEvent.css'
import bottom from '../image/bottom.png';

const WeddingEvent = () => {
    return (
        <div className='WeddingEvent'>
            <img src={bottom} alt="bottom" />
            <h1>When and Where</h1>
            <span className='txt'>A beautiful app for consectetur adipisicing elit, sed do eiusmod tempor incididunt ut mollit anim id est laborum. Sedut perspiciatis unde omnis.</span>
            <div class="contain-card">
                <div class="card">
                    <div class="card-body">
                        <span>Kim Tae Gon (Church)</span>
                        <span>09:00</span>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ratione nobis, ex vero tenetur magni?
                        </p>
                        <button class="btn">Read More</button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <span>Grand Hyatt</span>
                        <span>15:00</span>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ratione nobis, ex vero tenetur magni?
                        </p>
                        <button class="btn">Read More</button>
                    </div>
                </div>
                <div class="card">
                    <div class="card-body">
                        <span>Grand Hyatt Jakarta Ballroom & Penthouse</span>
                        <span>18:00</span>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel ratione nobis, ex vero tenetur magni?
                        </p>
                        <button class="btn">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeddingEvent