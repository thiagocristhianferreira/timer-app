import React, { useState, useEffect } from "react";

import Progress from "../Progress/Progress";
import './Timers.css';

const Timers = (props) => {
  const {
    seconds,
    secondsPartial,
    count,
    percent,
    setPercent,
    percentPartial,
    setPercentPartial
  } = props;

  const [totalBackgroundColor, setTotalBackgroundColor] = useState("green");
  const [partialBackgroundColor, setPartialBackgroundColor] = useState("green");

  useEffect(() => {
    if (seconds === 0) setTotalBackgroundColor("#282c34");
    if (secondsPartial === 2) setPartialBackgroundColor("#282c34");
    if (seconds >= 0) {
      setPercent(percent => percent - 4);
      if (percentPartial === 0 && count < 4) {
        setPartialBackgroundColor("green");
        setPercentPartial(125);
      }
      setPercentPartial(percentPartial => percentPartial - 25);
      if (percentPartial === 0 && count === 4) {
        setPercentPartial(percentPartial => percentPartial + 25);
      }
    }
  }, [seconds]);

  return (
    <section>
      <div className="time">
        <div>{`⌚ Tempo da Atividade: ${seconds} s`}</div>
        <Progress done={percent} bc={totalBackgroundColor} />
      </div>
      <div className="time">
        <div>{`⏱ Questão: ${secondsPartial} s`}</div>
        <Progress done={percentPartial} bc={partialBackgroundColor} />
      </div>
    </section>
  );
}

export default Timers;
