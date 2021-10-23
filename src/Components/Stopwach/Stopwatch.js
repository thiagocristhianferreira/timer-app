import React, { useEffect, useState } from "react";

import './Stopwatch.css';
import checks from '../../Images/checks.gif';


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
      <div className="time">
        <div>{`⌚Atividade: ${seconds} s`}</div>
        <div>{`⌚Questão: ${secondsPartial} s`}</div>
      </div>
      <div className="time">
        <img src={checks} alt="check" />
      </div>
      <div className="row">
        <button className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`} onClick={toggle}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button className="button other-button" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Stopwatch;