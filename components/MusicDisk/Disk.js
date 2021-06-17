import { useState, useEffect, useContext } from "react";
import Image from "next/image";
import audioContext from "../../contexts/audioContext";
import listAudio from "../../functions/listAudio";

const Disk = () => {
  const { isPlay, index, theme } = useContext(audioContext);
  const [image, setImage] = useState("");
  const { backgroundColor, boxShadow } = theme;

  useEffect(() => {
    setImage(listAudio()[index].name);
  }, [index]);
  return (
    <div
      style={{
        backgroundColor: backgroundColor.primary,
        boxShadow: boxShadow.a,
      }}
      className="alternative p-1 h-48 w-48 rounded-full flex justify-center items-center"
    >
      <Image
        src={`/Images/${image}.jpg`}
        height="192"
        width="192"
        className={`rounded-full ${isPlay && "animate-spin-slow"} object-cover`}
      />
      <div
        style={{
          backgroundColor: backgroundColor.primary,
        }}
        className="absolute h-6 w-6 rounded-full"
      ></div>
      <div
        style={{
          backgroundColor: backgroundColor.primary,
          boxShadow: boxShadow.b,
        }}
        className="absolute h-5 w-5 rounded-full"
      ></div>
    </div>
  );
};

export default Disk;
