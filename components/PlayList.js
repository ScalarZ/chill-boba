import { useContext } from "react";
import styles from "../styles/App.module.css";
import audioContext from "../contexts/audioContext";
import MusicName from "./MusicName";
import List from "./PlayList/List";
import Play from "./PlayList/Play";

const PlayList = () => {
  const { onList, theme } = useContext(audioContext);
  const {
    listBg: { name, position },
    backgroundColor,
  } = theme;

  return (
    <div
      style={{
        backgroundColor: backgroundColor.primary,
        backgroundPosition: position.min,
      }}
      className={`absolute m-auto max-w-3xl h-full w-full ${
        onList ? "-bottom-0" : "-bottom-full"
      } bg-no-repeat ${name.min}
      transition-all duration-500 ${onList ? "delay-0" : "delay-500"} z-50`}
    >
      <div
        style={{ backgroundPosition: position.max }}
        className={`m-auto pt-8 px-5 h-full max-w-xl flex flex-col items-center ${name.max} bg-no-repeat`}
      >
        <MusicName fontSize="text-xl" />
        <List />
        <Play />
      </div>
    </div>
  );
};

export default PlayList;
