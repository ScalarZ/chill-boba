import { useContext } from "react";
import audioContext from "../../contexts/audioContext";

const PlayList = ({ List }) => {
  const {
    setOnList,
    theme: { iconsColor },
  } = useContext(audioContext);

  return (
    <i className="flex cursor-pointer" onClick={() => setOnList(true)}>
      {List(iconsColor)}
    </i>
  );
};

export default PlayList;
