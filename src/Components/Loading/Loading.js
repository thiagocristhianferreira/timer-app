import React from "react";

import LoadingGif from '../../Images/loading.gif';
import './Loading.css';

const Loading = () => {
  return (
    <figure className="loading">
      <img src={LoadingGif} alt="Loading" />
    </figure>
  )
}

export default Loading;
