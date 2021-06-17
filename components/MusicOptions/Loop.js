import { useEffect, useContext } from "react";
import audioContext from "../../contexts/audioContext";
import listAudio from "../../functions/listAudio";

const audioList = listAudio().map((audio) => audio.url);

const Loop = ({ Loop_, Shuffle }) => {
  const {
    audio,
    isLoop,
    setIsLoop,
    setIndex,
    index,
    isEnd,
    theme: { iconsColor },
  } = useContext(audioContext);

  const changeLoop = () => {
    setIsLoop(!isLoop);
    audio.current.loop = !isLoop;
  };

  useEffect(() => {
    if (isEnd && !isLoop) {
      if (index + 1 < audioList.length) {
        audio.current.src = audioList[index + 1];
        setIndex(index + 1);
      } else {
        audio.current.src = audioList[0];
        setIndex(0);
      }
      audio.current.play();
    }
  }, [isEnd]);
  return (
    <i className="flex cursor-pointer" onClick={changeLoop}>
      {isLoop ? Loop_(iconsColor) : Shuffle(iconsColor)}
    </i>
  );
};

export default Loop;
