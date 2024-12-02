import { useEffect, useState } from "react";

export const useTime = (workedTime_: number, remainingTime_: number) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [workedTime, setWorkedTime] = useState(workedTime_);
    const [remainingTime, setRemainingTime] = useState(remainingTime_);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
            setWorkedTime((prevWorkedTime) => prevWorkedTime + 1);
            setRemainingTime((prevRemainingTime) => Math.max(prevRemainingTime - 1, 0));
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return { currentTime, workedTime, remainingTime, isPaused, setIsPaused };
}