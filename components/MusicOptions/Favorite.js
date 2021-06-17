import { useState, useContext } from "react";
import audioContext from "../../contexts/audioContext";
import listAudio from "../../functions/listAudio";

const Favorite = ({ Favorite, Heart }) => {
  const {
    index,
    theme: { iconsColor },
  } = useContext(audioContext);
  const [audioList, setAudioList] = useState(listAudio());

  const handleFavorite = () => {
    const newList = audioList.map((audio, i) => {
      if (index === i) {
        audio.favorite = !audio.favorite;
      }
      return audio;
    });
    listAudio(newList);
    setAudioList(newList);
  };
  return (
    <i className="flex cursor-pointer" onClick={handleFavorite}>
      {audioList[index].favorite
        ? Favorite(iconsColor)
        : Heart(iconsColor)}
    </i>
  );
};

export default Favorite;
