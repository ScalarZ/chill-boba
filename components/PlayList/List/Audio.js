import { useContext } from "react";
import audioContext from "../../../contexts/audioContext";
import {
  setDot,
  setEmptyDot,
  setMiniFavorite,
  setMiniHeart,
} from "../../../public/SVG";

const Audio = ({ i, name, url, favorite, length }) => {
  const { audio, index, setIndex, setIsPlay, setC, theme } =
    useContext(audioContext);
  const { textColor, backgroundColor, iconsColor } = theme;

  const changeAudio = (i, url) => {
    audio.current.src = url;
    setIndex(i);
    setIsPlay(false);
    setC(0);
  };

  return (
    <li
      style={{
        border: `1px solid ${iconsColor}20`,
        backgroundColor: backgroundColor.primary,
        color: textColor.primary,
      }}
      className={`${i !== 0 ? "mt-6" : "mt-0"} ${
        i !== length - 1 ? "mb-6" : "mb-0"
      } px-4 py-2 rounded-lg flex justify-between items-center font-raleway font-medium list-none cursor-pointer z-50`}
      onClick={() => changeAudio(i, url)}
    >
      {name}
      <span className="flex">
        <i className="flex mr-2">
          {favorite ? setMiniFavorite(iconsColor) : setMiniHeart(iconsColor)}
        </i>
        <i className="flex">
          {index === i ? setDot(iconsColor, "none") : setEmptyDot()}
        </i>
      </span>
    </li>
  );
};

export default Audio;
