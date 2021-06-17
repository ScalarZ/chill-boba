import { useContext } from "react";
import Image from "next/image";
import audioContext from "../../contexts/audioContext";
import Audio from "./List/Audio";
import listAudio from "../../functions/listAudio";

const List = () => {
  const audioList = listAudio();
  const { theme } = useContext(audioContext);
  const { effect2 } = theme;

  return (
    <div className="overflow-y-scroll relative my-8 px-2 h-full w-full">
      <div style={{ ...effect2.position, zIndex: -1 }} className={"absolute"}>
        <Image
          src={`/Images/${effect2.path}/${effect2.name}`}
          className="object-fill"
          height={effect2.size.height}
          width={effect2.size.width}
        />
      </div>
      <ul className="px-4 w-full">
        {audioList.map((audio, i) => (
          <Audio
            key={i}
            name={audio.name}
            url={audio.url}
            favorite={audio.favorite}
            i={i}
            length={audioList.length}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
