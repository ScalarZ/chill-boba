import { useState, useRef } from "react";
import styles from "../styles/App.module.css";

const store = () => {
  const audio = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [index, setIndex] = useState(0);
  const [c, setC] = useState(0);
  const [onList, setOnList] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [isLoop, setIsLoop] = useState(true);
  const [theme, setTheme] = useState({
    iconsColor: "#916C42",
    slider: { stroke: "#916C42", track: "#FFDA81", fill: "#FFEBBB" },
    textColor: {
      primary: "#916C42",
      secondary: "#FFDA81",
    },
    backgroundColor: {
      primary: "#FFEBBB",
      secondary: "#916C42",
    },
    boxShadow: {
      a: "-4px -4px 8px rgb(255 255 255 / 70%), 4px 4px 8px #ffd777",
      b: "inset -2px -2px 4px rgb(255 255 255 / 70%), inset 2px 2px 4px #ffd777",
    },
    appBg: {
      name: { min: styles.Main_BoBa_Min, max: styles.Main_BoBa_Max },
      position: { min: "right top", max: "right top" },
    },
    listBg: {
      name: { min: styles.List_BoBa_Min, max: styles.List_BoBa_Max },
      position: { min: "left 40%", max: "left 65%" },
    },
    effects1: "dot.svg",
    effect2: {
      path: "BoBa",
      name: "boba3.png",
      position: { bottom: "0", right: "0" },
      size: { height: "106", width: "36" },
    },
    button: styles.BoBa_Switch,
  });
  return {
    audio,
    isPlay,
    setIsPlay,
    index,
    setIndex,
    c,
    setC,
    onList,
    setOnList,
    isEnd,
    setIsEnd,
    isLoop,
    setIsLoop,
    theme,
    setTheme,
  };
};

export default store;
