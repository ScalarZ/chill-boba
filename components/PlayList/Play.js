import { useContext } from "react";
import audioContext from "../../contexts/audioContext";
import MusicName from "../MusicName";
import PlayButton from "../MusicController/PlayButton";
import MiniDisk from "./Play/MiniDisk";
import AudioController from "./Play/AudioController";
import { setMiniPlay, setMiniPause, setDown } from "../../public/SVG";

const Play = () => {
  const { onList, setOnList, theme } = useContext(audioContext);
  const { backgroundColor, boxShadow, iconsColor } = theme;

  return (
    <div
      style={{
        backgroundColor: backgroundColor.primary,
        boxShadow: boxShadow.a,
      }}
      className={`px-5 py-4 w-full rounded-t-3xl text-center transition duration-500 ${
        onList ? "delay-500" : "delay-0"
      } transform ${onList ? "translate-y-0" : "translate-y-24"}`}
    >
      <div className="flex justify-center">
        <i
          className="flex animate-bounce cursor-pointer"
          onClick={() => setOnList(false)}
        >
          {setDown(iconsColor)}
        </i>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <MiniDisk />
          <MusicName fontSize="text-base" />
        </div>
        <AudioController />
        <PlayButton
          h="h-10"
          w="w-10"
          imageH="11.84"
          imageW="10.29"
          Play={setMiniPlay}
          Pause={setMiniPause}
        />
      </div>
    </div>
  );
};

export default Play;
