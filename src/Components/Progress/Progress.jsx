import { useEffect, useState } from "react";

import './Progress.css';

const Progress = ({ done, bc }) => {
  const [style, setStyle] = useState({ width: "0%", backgroundColor: bc });

  useEffect(() => {
    const timer = setTimeout(() => {
      setStyle({
        opacity: 1,
        width: `${done}%`,
        backgroundColor: bc,
      });
    }, 200);

    return () => clearTimeout(timer);
  }, [done, bc]);

  return (
    <div className="progress">
      <div className="progress-done" style={style}>
        {Math.round(done)}%
      </div>
    </div>
  );
};

export default Progress;
