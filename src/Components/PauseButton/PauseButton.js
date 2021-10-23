import React from "react";

import './PauseButton.css';

const PauseButton = (props) => {
  const { toggle, isActive } = props;
  return (
    <button
      className={`button button-primary button-primary-${isActive ? 'active' : 'inactive'}`}
      onClick={toggle}
    >
      {isActive ? 'Pause' : 'Start'}
    </button>
  )
};

export default PauseButton;