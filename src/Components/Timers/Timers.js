import React from "react";

import './Timers.css'

const Timers = (props) => {
  const { seconds, secondsPartial } = props;
  return (
    <div className="time">
        <div>{`⌚ Atividade: ${seconds} s`}</div>
        <div>{`⏱ Questão: ${secondsPartial} s`}</div>
      </div>
  );
}

export default Timers;
