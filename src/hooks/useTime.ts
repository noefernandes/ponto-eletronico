import { useEffect, useState } from "react";

export const useTime = (workedTime_: number, remainingTime_: number, exceededTime_: number) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [workedTime, setWorkedTime] = useState(workedTime_);
    const [remainingTime, setRemainingTime] = useState(remainingTime_);
    const [exceededTime, setExceededTime] = useState(exceededTime_);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, [isPaused]);

    const updateTimes = (newWorkedTime: number, newRemainingTime: number, newExceededTime: number) => {
        setWorkedTime(newWorkedTime);
        setRemainingTime(newRemainingTime);
        setExceededTime(newExceededTime);
    };

    return { currentTime, workedTime, remainingTime, exceededTime, isPaused, setIsPaused, updateTimes };
}