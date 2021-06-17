import listAudio from "./listAudio";

const audioList = listAudio().map((audio) => audio.url);

const switchAudio = (d, audio, index, setIndex, setIsPlay, setC) => {
  setIsPlay(false);
  setC(0);

  switch (d) {
    case "right":
      if (index + 1 < audioList.length) {
        audio.current.src = audioList[index + 1];
        setIndex(index + 1);
        return audioList[index + 1];
      } else {
        audio.current.src = audioList[0];
        setIndex(0);
        return audioList[0];
      }
    case "left":
      if (index > 0) {
        audio.current.src = audioList[index - 1];
        setIndex(index - 1);
        return audioList[index - 1];
      } else {
        audio.current.src = audioList[audioList.length - 1];
        setIndex(audioList.length - 1);
        return audioList[audioList.length - 1];
      }
    default:
      return;
  }
};

export default switchAudio;
