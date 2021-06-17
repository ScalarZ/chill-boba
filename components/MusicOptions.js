import { useContext } from "react";
import audioContext from "../contexts/audioContext";
import {
  setLoop,
  setShuffle,
  setFavorite,
  setHeart,
  setList,
} from "../public/SVG";
import PlayList from "./MusicOptions/PlayList";
import Favorite from "./MusicOptions/Favorite";
import Loop from "./MusicOptions/Loop";

const MusicOptions = () => {
  const {
    theme: { backgroundColor, boxShadow },
  } = useContext(audioContext);

  return (
    <div
      style={{
        backgroundColor: backgroundColor.primary,
        boxShadow: boxShadow.a,
      }}
      className="h-14 w-64 rounded-lg flex justify-around items-center"
    >
      <PlayList List={setList} />
      <Favorite Favorite={setFavorite} Heart={setHeart} />
      <Loop Loop_={setLoop} Shuffle={setShuffle} />
    </div>
  );
};

export default MusicOptions;
