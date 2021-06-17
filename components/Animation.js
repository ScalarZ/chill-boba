import { useContext } from "react";
import audioContext from "../contexts/audioContext";
import BoBaAnimation from "./Animation/BoBaAnimation";
import SaKuraAnimation from "./Animation/SaKuraAnimation";
import BearsAnimation from "./Animation/BearsAnimation";

const Animation = () => {
  const {
    theme: {
      effect2: { path },
    },
  } = useContext(audioContext);

  switch (path) {
    case "BoBa":
      return <BoBaAnimation />;
    case "SaKura":
      return <SaKuraAnimation />;
    case "Bears":
      return <BearsAnimation />;
  }
};

export default Animation;
