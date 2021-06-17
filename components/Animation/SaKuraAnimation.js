import { useState, useEffect } from "react";
import Image from "next/image";

const SaKuraAnimation = () => {
  const [SaKura] = useState([
    "animate-sakura0",
    "animate-sakura1",
    "animate-sakura2",
    "animate-sakura3",
    "animate-sakura4",
    "animate-sakura5",
    "animate-sakura6",
    "animate-sakura7",
  ]);
  return (
    <div className="absolute w-full top-72 flex tablet-max:justify-evenly tablet-min:justify-between">
      {SaKura.map((animate, index) => {
        return (
          <i key={index} className={`opacity-0 ${animate}`}>
            <Image src="/SVGs/leaf.svg" height="30" width="30" />
          </i>
        );
      })}
    </div>
  );
};

export default SaKuraAnimation;
