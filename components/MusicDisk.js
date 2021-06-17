import { useContext } from "react";
import audioContext from "../contexts/audioContext";
import MusicBar from "./MusicDisk/MusicBar";
import Disk from "./MusicDisk/Disk";

const MusicDisk = () => {
  const {
    theme: { slider },
  } = useContext(audioContext);

  return (
    <div
      style={{ border: `2px solid ${slider.track}` }}
      className="relative h-64 w-64 rounded-full flex justify-center items-center"
    >
      <MusicBar />
      <Disk />
    </div>
  );
};

export default MusicDisk;
