import React from 'react';
import DateTimeDisplay from './DateTimeDisplay';
import useCountDown from './useCountDown';

const ExpiredNotice = () => {
    return (
        <div className="expired-notice">
            <span>Expired!!!</span>
            <p>Please select a future date and time.</p>
        </div>
    );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
    return (
        <div className="show-counter">
            <div className='container-time'>
                <div className='box'>
                    <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
                </div>
            </div>
            <div className='container-time'>
                <div className='box'>
                    <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
                </div>
            </div>
            <div className='container-time'>
                <div className='box'>
                    <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
                </div>
            </div>
            <div className='container-time'>
                <div className='box'>
                    <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
                </div>
            </div>
        </div>
    );
};

const CountdownTimer = ({ targetDate }) => {
    const [days, hours, minutes, seconds] = useCountDown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return (
            <ShowCounter
                days={days}
                hours={hours}
                minutes={minutes}
                seconds={seconds}
            />
        );
    }
};

export default CountdownTimer;