import { useEffect, useState } from "react";

import './Stopwatch.css';
import checks from '../../Images/checks.gif';
import Timers from "../Timers/Timers";
import ImgChecks from "../ImgChecks/ImgChecks";
import PauseButton from "../PauseButton/PauseButton";
import ResetButton from "../ResetButton/ResetButton";
import Header from "../Header/Header";
import Audio from "../Audio/Audio";

const TOTAL_SECONDS = 25;
const PARTIAL_SECONDS = 5;

const Stopwatch = () => {
  const [seconds, setSeconds] = useState(TOTAL_SECONDS);
  const [isActive, setIsActive] = useState(true);

  // Todos os valores abaixo são derivados de `seconds`, evitando estados
  // paralelos que precisavam ser mantidos em sincronia manualmente.
  const secondsPartial =
    seconds === 0 ? 0 : ((seconds - 1) % PARTIAL_SECONDS) + 1;
  const count = Math.floor((TOTAL_SECONDS - seconds) / PARTIAL_SECONDS);
  const percent = (seconds / TOTAL_SECONDS) * 100;
  const percentPartial = (secondsPartial / PARTIAL_SECONDS) * 100;

  const toggle = () => setIsActive((active) => !active);

  const reset = () => {
    setSeconds(TOTAL_SECONDS);
    setIsActive(true);
  };

  useEffect(() => {
    if (!isActive) return undefined;

    const interval = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          setIsActive(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isActive]);

  return (
    <div className="app">
      <Header />
      <Timers
        seconds={seconds}
        secondsPartial={secondsPartial}
        count={count}
        percent={percent}
        percentPartial={percentPartial}
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
