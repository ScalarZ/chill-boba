import { useState } from "react";
import Image from "next/image";

const BearsAnimation = () => {
  const [Bears] = useState([
    "rotate(36deg)",
    "rotate(72deg)",
    "rotate(108deg)",
    "rotate(144deg)",
    "rotate(180deg)",
    "rotate(216deg)",
    "rotate(252deg)",
    "rotate(288deg)",
    "rotate(324deg)",
    "rotate(360deg)",
  ]);
  return (
    <div className="absolute top-0 -left-9 h-24 w-24 flex justify-center items-center animate-spin-slow">
      {Bears.map((rotate, index) => {
        return (
          <i
            style={{ transform: `${rotate} translateY(100px)` }}
            key={index}
            className={`absolute`}
          >
            <Image
              src="/SVGs/star.svg"
              height="20"
              width="20"
              className={"animate-bears0"}
            />
          </i>
        );
      })}
    </div>
  );
};

export default BearsAnimation;
