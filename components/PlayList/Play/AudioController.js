import { useContext } from "react";
import audioContext from "../../../contexts/audioContext";

const AudioController = () => {
  const { audio } = useContext(audioContext);

  return (
    <audio
      style={{ left: "-1000px" }}
      ref={audio}
      id="audio"
      controls
      loop
      hidden
      src="https://www.fesliyanstudios.com/musicfiles/2019-06-07_-_Chill_Gaming_-_David_Fesliyan.mp3"
      type="audio/mpeg"
      className="absolute -inset-x-full opacity-0"
    />
  );
};

export default AudioController;
