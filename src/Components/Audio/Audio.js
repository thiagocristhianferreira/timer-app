import React from "react";

import './Audio.css';
import mp3 from '../../Musics/supermariomorrendo.mp3';

const Audio = (props) => {
  const {seconds} = props;
  if (seconds === 0) {
    return (
      <section>
        <p>Seu tempo acabou ð¥²</p>
        <audio
          id='backgroundMusic'
          controls
          autoPlay
          src={mp3}
        ></audio>
      </section>
    )
  } else {
    return <p>ðââï¸ O tempo jÃ¡ estÃ¡ contando ðââï¸</p>
  }
}

export default Audio;