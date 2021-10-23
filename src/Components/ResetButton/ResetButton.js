import React from "react";

import './ResetButton.css';

const ResetButton = (props) => {
  const { reset } = props;
  return (
    <button className="button other-button" onClick={reset}>
      Reset
    </button>
  );
}

export default ResetButton;
