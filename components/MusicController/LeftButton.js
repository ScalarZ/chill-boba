import { useContext } from "react";
import audioContext from "../../contexts/audioContext";
import switchAudio from "../../functions/switchAudio";

const LeftButton = ({ Left }) => {
  const { audio, index, setIndex, setIsPlay, setC, theme } =
    useContext(audioContext);
  const { backgroundColor, iconsColor, button } = theme;

  return (
    <button
      style={{ backgroundColor: backgroundColor.primary }}
      className={`h-12 w-12 rounded-full flex justify-center items-center focus:outline-none ${button}`}
      onClick={() =>
        switchAudio("left", audio, index, setIndex, setIsPlay, setC)
      }
    >
      <i className="flex transform -translate-x-px">{Left(iconsColor)}</i>
    </button>
  );
};

export default LeftButton;
