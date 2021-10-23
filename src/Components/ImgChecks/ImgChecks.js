import React from "react";

import './ImgChecks.css'

const ImgChecks = (props) => {
  const { checks } = props;
  return (
    <div className="time">
      <img src={checks} alt="check" />
    </div>
  )
}

export default ImgChecks;
