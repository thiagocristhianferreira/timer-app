import React, { useState, useEffect } from "react";

import './Timers.css'

const Progress = ({done, bc}) => {
	const [style, setStyle] = useState({});
	setTimeout(() => {
		const newStyle = {
      padding: "10px",
      backgroundColor: bc,
			opacity: 1,
			width: `${done}%`
		}
		setStyle(newStyle);
	}, 200);
	
	return (
		<div className="progress">
			<div className="progress-done" style={style}>
				{done}%
			</div>
		</div>
	)
}

const Timers = (props) => {
  const { seconds, secondsPartial, count } = props;

  const [percent, setPercent] = useState(104);
  const [percentPartial, setPercentPartial] = useState(125);
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
      console.log(percentPartial, count);
      if (percentPartial === 0 && count === 4) {
        console.log('aqui');
        setPercentPartial(percentPartial => percentPartial + 25);
      }
    }
  }, [seconds]);
  // [count, percentPartial, seconds, secondsPartial])

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
