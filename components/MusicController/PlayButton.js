import { useContext } from "react";
import styles from "../../styles/App.module.css";
import audioContext from "../../contexts/audioContext";

const PlayButton = ({ h, w, Play, Pause }) => {
  const { audio, isPlay, setIsPlay, theme } = useContext(audioContext);
  const { boxShadow, backgroundColor, iconsColor } = theme;

  const playAudio = () => {
    if (!isPlay) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
    setIsPlay(!isPlay);
  };
  return (
    <button
      style={{
        backgroundColor: backgroundColor.primary,
        boxShadow: !isPlay ? boxShadow.a : boxShadow.b,
      }}
      className={`${h} ${w} rounded-full flex justify-center items-center transform focus:outline-none`}
      onClick={playAudio}
    >
      {!isPlay ? (
        <i
          className={`absolute flex transform translate-x-0.5 transition duration-300`}
        >
          {Play(iconsColor)}
        </i>
      ) : (
        <i
          className={`absolute flex transform translate-x-px transition duration-300`}
        >
          {Pause(iconsColor)}
        </i>
      )}
    </button>
  );
};

export default PlayButton;
