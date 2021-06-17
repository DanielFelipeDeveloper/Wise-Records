import React, { useEffect, useRef, useState } from 'react';

import { BiSkipPrevious, BiSkipNext } from 'react-icons/bi';
import { FaPause, FaPlay, FaShoppingCart } from 'react-icons/fa';
import { AiFillSound } from 'react-icons/ai';
import { TiThMenu } from 'react-icons/ti';
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import { Empty, PlayerContainer, PlayerContent } from './styles';
import { usePlayer } from '../../context/PlayerContext';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

const Player: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);

  const {
    beats,
    currentBeatIndex,
    isPlaying,
    togglePlay,
    setPlayingState,
    playNext,
    playPrevious,
    hasPrevious,
    hasNext,
  } = usePlayer();

  function setupProgressListener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener('timeupdate', () => {
      setProgress(Math.floor(audioRef.current.currentTime));
    });
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  const beat = beats[currentBeatIndex];
  return (
    <>
      { beat ? (
        <PlayerContainer>
          <div className="progress-wrapper mobile">
            <span>{convertDurationToTimeString(progress)}</span>
            <div className="slider">
              <Slider
                max={beat.duration}
                step={beat.duration / 100}
                value={progress}
                onChange={handleSeek}
                trackStyle={{ backgroundColor: '#6900ff' }}
                railStyle={{ backgroundColor: '#707070' }}
                handleStyle={{ borderColor: '#6900ff', borderWidth: 4 }}
              />
            </div>
            <span>{beat.durationAsString || '00:00'}</span>
          </div>

          <audio
            src={beat.audio}
            ref={audioRef}
            onLoadedMetadata={setupProgressListener}
            onPlay={() => setPlayingState(true)}
            onPause={() => setPlayingState(false)}
            autoPlay
          />

          <PlayerContent>
            <div className="player-bottom">
              <div className="track-info">
                <div className="img-and-description">
                  <img
                    src={beat.image}
                    alt="cardImage"
                  />
                  <div>
                    <p>{beat.name}</p>
                    <span>D.Wise</span>
                  </div>
                </div>
              </div>
              <div className="player-controls">
                <div className="players">
                  <button type="button" disabled={!hasPrevious}>
                    <BiSkipPrevious fontSize={30} onClick={playPrevious} />
                  </button>
                  <span>
                    <button type="button" onClick={togglePlay}>
                      { !isPlaying ? <FaPlay fontSize={18} /> : <FaPause fontSize={16} /> }
                    </button>
                  </span>
                  <button type="button" disabled={!hasNext}>
                    <BiSkipNext fontSize={30} onClick={playNext} />
                  </button>
                </div>
                <p>Trap Beat Style</p>
              </div>
              <div className="progress-wrapper">
                <span>{convertDurationToTimeString(progress)}</span>
                <div className="slider">
                  <Slider
                    max={beat.duration}
                    step={beat.duration / 100}
                    value={progress}
                    onChange={handleSeek}
                    trackStyle={{ backgroundColor: '#6900ff' }}
                    railStyle={{ backgroundColor: '#707070' }}
                    handleStyle={{ borderColor: '#6900ff', borderWidth: 4 }}
                  />
                </div>
                <span>{beat.durationAsString || '00:00'}</span>
              </div>
              <div className="footer-right">
                <a href="/">
                  <FaShoppingCart color="#fff" fontSize={15} />
                  <span>Buy</span>
                </a>
                <AiFillSound className="sound" color="#FFF" fontSize={21} />
                <TiThMenu className="options" color="#FFF" fontSize={21} />
              </div>
            </div>
          </PlayerContent>
        </PlayerContainer>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Player;
