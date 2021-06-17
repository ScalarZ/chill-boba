import { useState } from "react";
import Image from "next/image";

const BoBaAnimation = () => {
  const [BoBa] = useState([
    "animate-boba0",
    "animate-boba1",
    "animate-boba2",
    "animate-boba3",
    "animate-boba4",
    "animate-boba5",
    "animate-boba6",
    "animate-boba7",
    "animate-boba8",
  ]);

  return (
    <div 
    className="absolute h-48 w-14 top-0 left-0">
      {BoBa.map((animate, index) => {
        if (index % 2 === 0) {
          return (
            <i
              key={index}
              className={`absolute transform translate-x-3 -translate-y-6 ${animate}`}
            >
              <Image src="/SVGs/dot.svg" height="20" width="20" />
            </i>
          );
        }
        return (
          <i
            key={index}
            className={`absolute transform translate-x-6 -translate-y-6 ${animate}`}
          >
            <Image src="/SVGs/dot.svg" height="20" width="20" />
          </i>
        );
      })}
    </div>
  );
};

export default BoBaAnimation;
