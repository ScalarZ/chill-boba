import { useEffect, useContext } from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import audioContext from "../../contexts/audioContext";
import Timer from "../../functions/timer";

const MusicBar = () => {
  const { audio, isPlay, c, setC, setIsEnd, theme } = useContext(audioContext);
  const { slider } = theme;
  useEffect(() => {
    if (isPlay || audio.current.interval) Timer(audio.current, setC, setIsEnd);
  }, [isPlay]);

  return (
    <div className="absolute h-64 w-64 -inset-x-0.5 -inset-y-0.5 flex justify-center items-center">
      <CircularSlider
        dataIndex={c}
        label="o"
        labelColor="transparent"
        width="256"
        knobSize="20"
        progressSize="2"
        progressColorFrom={slider.stroke}
        progressColorTo={slider.stroke}
        trackSize="2"
        valueFontSize="0"
        knobColor={slider.stroke}
        trackColor={slider.track}
        onChange={(value) => {
          if (value !== c) {
            audio.current.currentTime = Math.floor(
              (value * audio.current.duration) / 360
            );
          }
        }}
      />
    </div>
  );
};

export default MusicBar;
