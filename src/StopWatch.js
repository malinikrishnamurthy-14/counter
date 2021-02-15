import React, { useEffect, useState } from "react";

const StopWatch = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const [int, setInt] = useState();

  const start = () => {
    setStartTimer(true);
  };
  const stop = () => {
    setStartTimer(false);
  };
  const reset = () => {
    setResetTimer(true);
  };

  useEffect(() => {
    if (resetTimer) {
      clearInterval(int);
      setSeconds(0);
      setMinutes(0);
      setHours(0);
    }
  }, [resetTimer]);

  useEffect(() => {
    if (startTimer) {
      setResetTimer(false);
      setInt(
        setInterval(() => {
          setSeconds(seconds + 1);

          if (seconds === 60) {
            setSeconds(0);
            setMinutes(minutes + 1);
          }

          if (minutes === 60) {
            setMinutes(0);
            setHours(hours + 1);
          }

          if (hours === 24) {
            setSeconds(0);
            setMinutes(0);
            setHours(0);
          }
        }, 1000)
      );

      return () => {
        clearInterval(int);
      };
    }
  }, [startTimer, seconds, minutes, hours]);

  return (
    <div className="stopwatch-content">
      {`${hours.toString().padStart(2, 0)} : ${minutes
        .toString()
        .padStart(2, 0)} : ${seconds.toString().padStart(2, 0)} `}
      <button onClick={() => start()}>Start</button>
      <button onClick={() => stop()}>Stop</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

export default StopWatch;
