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
      src="https://github.com/Account04/rainsounds/raw/main/rain-in-forest-birds-nature-111405.mp3"
      type="audio/mpeg"
      className="absolute -inset-x-full opacity-0"
    />
  );
};

export default AudioController;
