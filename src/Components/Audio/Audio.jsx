import { useEffect, useRef } from "react";

import './Audio.css';
import mp3 from '../../Musics/supermariomorrendo.mp3';

const Audio = (props) => {
  const { seconds } = props;
  const audioRef = useRef(null);

  useEffect(() => {
    if (seconds === 0 && audioRef.current) {
      // play() pode ser rejeitado por políticas de autoplay do navegador;
      // o erro é ignorado pois os controles permanecem disponíveis.
      const playPromise = audioRef.current.play();
      if (playPromise) playPromise.catch(() => {});
    }
  }, [seconds]);

  if (seconds === 0) {
    return (
      <section>
        <p>Seu tempo acabou 🥲</p>
        <audio
          ref={audioRef}
          id='backgroundMusic'
          controls
          src={mp3}
        ></audio>
      </section>
    );
  }

  return <p>🏃‍♀️ O tempo já está contando 🏃‍♂️</p>;
};

export default Audio;
