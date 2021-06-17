import Head from "next/head";
import audioContext from "../contexts/audioContext";
import useStore from "../functions/store";
import MusicDisk from "../components/MusicDisk";
import MusicName from "../components/MusicName";
import MusicController from "../components/MusicController";
import MusicOptions from "../components/MusicOptions";
import PlayList from "../components/PlayList";
import Animation from "../components/Animation";
import Theme from "../components/Theme";
import styles from "../styles/App.module.css";

const App = () => {
  const store = useStore();
  const {
    theme: {
      appBg: { name, position },
      backgroundColor,
    },
  } = store;
  return (
    <div style={{ backgroundColor: backgroundColor.primary }} className="App">
      <Head>
        <title>LoFi Chill Music</title>
        <link rel="shortcut icon" href="#"></link>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <audioContext.Provider value={store}>
        <div
          style={{
            backgroundPosition: position.min,
          }}
          className={`overflow-hidden relative m-auto max-w-3xl bg-no-repeat ${name.min}`}
        >
          <Theme />
          <PlayList />
          <div
            style={{
              backgroundPosition: position.max,
            }}
            className={`relative Main m-auto h-screen max-w-xl flex flex-col items-center justify-evenly bg-no-repeat ${name.max}`}
          >
            <Animation />
            <MusicDisk />
            <MusicName fontSize="text-3xl" />
            <MusicController />
            <MusicOptions />
          </div>
        </div>
      </audioContext.Provider>
    </div>
  );
};

export default App;
