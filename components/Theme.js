import { useState, useContext } from "react";
import styles from "../styles/App.module.css";
import audioContext from "../contexts/audioContext";
import { setDrop, setArrow } from "../public/SVG";
import changeTheme from "../functions/changeTheme";

const Theme = () => {
  const {
    setTheme,
    theme: { backgroundColor, boxShadow, slider },
  } = useContext(audioContext);
  const [themes] = useState([
    { name: "BoBa", color: "linear-gradient(135deg, #ffde8f, #985e1b)" },
    { name: "SaKura", color: "linear-gradient(135deg, #ffafc7, #ff2365)" },
    { name: "Bears", color: "linear-gradient(135deg, #8a8a8a, #333333)" },
  ]);
  const [toggle, setToggle] = useState(false);
  return (
    <div
      style={{
        height: "70px",
        backgroundColor: backgroundColor.primary,
        boxShadow: boxShadow.a,
      }}
      className={`pl-2 pr-3 absolute top-1/2 ${
        !toggle ? "tablet-min:-top-20" : "tablet-min:top-20"
      } tablet-min:right-16  ${
        !toggle ? "tablet-max:-right-40" : "tablet-max:right-0"
      } rounded-tl-xl rounded-bl-xl flex items-center transform -translate-y-8 tablet-min:-rotate-90 transition-all duration-300 z-40`}
    >
      <div
        style={{ height: "30px", width: "30px", boxShadow: boxShadow.a }}
        className="absolute -left-6 rounded-full"
      ></div>
      <div
        style={{
          backgroundColor: backgroundColor.primary,
        }}
        className="absolute h-full w-full -left-1 rounded-lg"
      ></div>
      <div
        className="absolute top-0 -left-6 cursor-pointer flex"
        onClick={() => setToggle(!toggle)}
      >
        <i>{setDrop(slider.fill)}</i>
        <i
          className={`absolute transform ${
            toggle && " rotate-180"
          } transition-all duration-300`}
        >
          {setArrow(slider.stroke)}
        </i>
      </div>
      {themes.map((theme, index) => (
        <div
          key={index}
          style={{
            height: "40px",
            width: "40px",
            background: theme.color,
            boxShadow: boxShadow.a,
          }}
          className="m-1 bg-lightColor rounded-full cursor-pointer z-30"
          onClick={() => {
            setTheme(changeTheme(theme.name));
            setToggle(false);
          }}
        ></div>
      ))}
    </div>
  );
};

export default Theme;
