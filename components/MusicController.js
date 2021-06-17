import PlayButton from "./MusicController/PlayButton";
import LeftButton from "./MusicController/LeftButton";
import RightButton from "./MusicController/RightButton";
import { setRight, setLeft, setPlay, setPause } from "../public/SVG";

const MusicController = () => {
  return (
    <div className="w-64 flex justify-between items-center">
      <LeftButton Left={setLeft} />
      <PlayButton h="h-16" w="w-16" Play={setPlay} Pause={setPause} />
      <RightButton Right={setRight} />
    </div>
  );
};

export default MusicController;
