import { useState, useEffect, useContext } from "react";
import audioContext from "../contexts/audioContext";
import listAudio from "../functions/listAudio";

const MusicName = ({ fontSize }) => {
  const {
    index,
    theme: { textColor },
  } = useContext(audioContext);
  const [name, setName] = useState("");

  useEffect(() => {
    setName(listAudio()[index].name);
  }, [index]);
  return (
    <h2
      style={{ color: textColor.primary }}
      className={`font-raleway font-medium ${fontSize} text-center`}
    >
      {name}
    </h2>
  );
};

export default MusicName;
