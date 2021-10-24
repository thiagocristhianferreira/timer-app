import React from "react";

import './Audio.css';
import mp3 from '../../Musics/supermariomorrendo.mp3';

const Audio = (props) => {
  const {seconds} = props;
  if (seconds === 0) {
    return (
      <section>
        <p>Seu tempo acabou 🥲</p>
        <audio
          id='backgroundMusic'
          controls
          autoPlay
          src={mp3}
        ></audio>
      </section>
    )
  } else {
    return <p>🏃‍♀️ O tempo já está contando 🏃‍♂️</p>
  }
}

export default Audio;