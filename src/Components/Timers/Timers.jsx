import Progress from "../Progress/Progress";
import './Timers.css';

const ACTIVE_COLOR = "green";
const DONE_COLOR = "#282c34";

const Timers = (props) => {
  const { seconds, secondsPartial, percent, percentPartial } = props;

  const totalBackgroundColor = seconds === 0 ? DONE_COLOR : ACTIVE_COLOR;
  const partialBackgroundColor = secondsPartial === 0 ? DONE_COLOR : ACTIVE_COLOR;

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
