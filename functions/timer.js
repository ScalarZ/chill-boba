const timer = (d, setC, setIsEnd) => {
  if (d.interval) {
    clearInterval(d.interval);
    d.interval = undefined;
  } else {
    d.interval = setInterval(() => {
      if (d.ended) {
        setIsEnd(true);
      } else {
        const t = Math.floor(d.currentTime);
        const n = (t * 360) / Math.floor(d.duration);
        const angle = Math.floor(n);
        setC(angle);
        setIsEnd(false);
      }
    }, 1000);
  }
};

export default timer;
