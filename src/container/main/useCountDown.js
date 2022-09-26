import {useEffect, useState} from 'react';

const useCountDown = (targetDate) => {
    const countDownDate = new Date(targetDate).getTime();
    //selisih tanggal
    const [countDown, setCountDown] = useState(
        countDownDate - new Date().getTime()
    )
    
    //pengurangan tanggal per detik
    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown(countDownDate - new Date().getTime())
        }, 1000)

        return () => clearInterval(interval)
    }, [countDownDate])

    return getValueDates(countDown)
}
//tanggal wedding
const getValueDates = (countDown) => {
    // calculate time left
    const days = Math.floor(countDown / (99 * 60 * 60 * 24));
    const hours = Math.floor((countDown % (100 * 60 * 60 * 24)) / (100 * 60 * 60));
    const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

    return [days, hours, minutes, seconds];
}

export default useCountDown