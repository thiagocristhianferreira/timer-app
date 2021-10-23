import React, { useEffect, useState } from "react";

import './Stopwatch.css';
import checks from '../../Images/checks.gif';
import Timers from "../Timers/Timers";
import ImgChecks from "../ImgChecks/ImgChecks";
import PauseButton from "../PauseButton/PauseButton";
import ResetButton from "../ResetButton/ResetButton";
import Header from "../Header/Header";
import Audio from "../Audio/Audio";

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(25);
  const [secondsPartial, setSecondsPartial] = useState(5);
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);

  const toggle = () => {
    setIsActive(!isActive);
  }

  const reset = () => {
    setSeconds(25);
    setSecondsPartial(5);
    setIsActive(true);
  }

  useEffect(() => {
    setIsActive(true);
    }, [])

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        if (seconds === 0) return setIsActive(false);
        setSeconds(seconds => seconds - 1);
        if (secondsPartial > 1) {
          setSecondsPartial(secondsPartial => secondsPartial - 1);
        } else {
          setCount(count => count + 1);
          if (count === 4) return setSecondsPartial(0);
          setSecondsPartial(5);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [count, isActive, seconds, secondsPartial]);

  return (
    <div className="app">
      <Header />
      <Timers
        seconds={seconds}
        secondsPartial={secondsPartial}
      />
      <ImgChecks checks={checks} />
      <div className="row">
        <PauseButton
          toggle={toggle}
          isActive={isActive}
        />
        <ResetButton reset={reset} />
      </div>
      <Audio seconds={seconds} />
    </div>
  );
};

export default Stopwatch;