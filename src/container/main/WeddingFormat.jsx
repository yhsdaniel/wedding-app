import React from 'react';
import '../css/WeddingFormat.css'

const WeddingFormat = () => {
    const database = {
        manName: 'Daniel',
        womanName: 'Listi',
        hotel: 'Grand Hyatt',
        street: 'Jl. M.H. Thamrin No.Kav. 28-30'
    }

    return(
        <div className='WeddingFormat'>
            <div className='lg-name'>
                <span className='font-link'>{database.manName}</span>
                <span className='font-link'>&</span>
                <span className='font-link'>{database.womanName}</span>
                <span>{database.hotel}</span>
                <span className='f-street'>{database.street}</span>
            </div>
        </div>
    )   
}

export default WeddingFormat