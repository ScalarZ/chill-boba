import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import audioContext from "../../../contexts/audioContext";
import listAudio from "../../../functions/listAudio";

const MiniDisk = () => {
  const { index } = useContext(audioContext);
  const [image, setImage] = useState("");

  useEffect(() => {
    setImage(listAudio()[index].name);
  }, [index]);
  return (
    <div className="mr-4 flex">
      <Image
        src={`/Images/${image}.jpg`}
        height="45"
        width="45"
        className={`rounded-full object-cover`}
      />
    </div>
  );
};

export default MiniDisk;
