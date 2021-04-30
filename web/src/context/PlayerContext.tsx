import {
  createContext, ReactNode, useContext, useState,
} from 'react';

interface Beat {
  id: string;
  image: string,
  audio: string,
  name: string,
  style: string,
  bpm: string,
  price: number,
  duration: number;
  durationAsString: string;
}

interface PlayerContextData {
  beats: Beat[];
  currentBeatIndex: number;
  isPlaying: boolean;
  hasPrevious: boolean;
  hasNext: boolean;
  playlist: (list: Beat[], index: number) => void;
  togglePlay: () => void;
  setPlayingState: (state: boolean) => void;
  playNext: () => void;
  playPrevious: () => void;
}

interface PlayerContextProviderProps {
  children: ReactNode;
}

const PlayerContext = createContext({} as PlayerContextData);

const usePlayer = () => useContext(PlayerContext);

const PlayerContextProvider = ({ children }: PlayerContextProviderProps) => {
  const [beats, setBeats] = useState([]);
  const [currentBeatIndex, setCurrentBeatIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const hasPrevious = currentBeatIndex > 0;
  const hasNext = (currentBeatIndex + 1) < beats.length;

  function playlist(list: Beat[], index: number) {
    setBeats(list);
    setCurrentBeatIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  function playNext() {
    if (hasNext) setCurrentBeatIndex(currentBeatIndex + 1);
  }

  function playPrevious() {
    if (hasPrevious) setCurrentBeatIndex(currentBeatIndex - 1);
  }

  return (
    <PlayerContext.Provider
      value={{
        beats,
        currentBeatIndex,
        isPlaying,
        playlist,
        togglePlay,
        setPlayingState,
        playNext,
        playPrevious,
        hasPrevious,
        hasNext,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export { PlayerContext, PlayerContextProvider, usePlayer };
