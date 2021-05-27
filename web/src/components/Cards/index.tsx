import React from 'react';
import { GetStaticProps } from 'next';

import { ImPause2, ImPlay3 } from 'react-icons/im';
import { FaShoppingCart } from 'react-icons/fa';

import api from '../../services/api';

import { usePlayer } from '../../context/PlayerContext';
import { convertDurationToTimeString } from '../../utils/convertDurationToTimeString';

import { DivCard, CardImage, BtnPlay, Description } from './styles';

type Beat = {
  id: string,
  image: string,
  audio: string,
  name: string,
  style: string,
  bpm: string,
  price: number,
  duration: number;
  durationAsString: string;
};

type CardsProps = {
  beats: Beat[];
};

const Cards: React.FC<CardsProps> = ({ beats }) => {
  const { playlist, togglePlay, isPlaying, currentBeatIndex } = usePlayer();
  return (
    <>
      {beats.map((beat, index) => (
        <DivCard key={beat.id}>
          <CardImage>
            <img src={beat.image} alt="cardImage" />

            <BtnPlay onClick={isPlaying && currentBeatIndex === index ? togglePlay : null}>
              <button type="button" onClick={() => playlist(beats, index)}>
                {
                      isPlaying && currentBeatIndex === index
                        ? <ImPause2 fontSize={24} color="#fff" />
                        : <ImPlay3 fontSize={28} color="#fff" />
                    }
              </button>
            </BtnPlay>
          </CardImage>

          <Description>
            <div>
              <span>{beat.name}</span>
              <p>{beat.style}</p>
              <p>{beat.bpm}</p>
            </div>
            <div>
              <button type="button">
                <FaShoppingCart color="#fff" fontSize={16} />
                <span>{beat.price}</span>
              </button>
            </div>
          </Description>
        </DivCard>
      ))}
    </>
  );
};

export default Cards;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('beats');
  const baseURL = 'http://localhost:3333';

  const beats = data.map((beat) => ({
    id: beat.id,
    image: `${baseURL}/files/${beat.image}`,
    audio: `${baseURL}/audio/${beat.audio}`,
    name: beat.name,
    style: beat.style,
    bpm: `${beat.bpm} BPM`,
    price: `R$ ${beat.price}.00`,
    duration: beat.audioDuration,
    durationAsString: convertDurationToTimeString(Number(beat.audioDuration)),
  }));

  return {
    props: {
      beats,
    },
    revalidate: 60 * 60 * 8,
  };
};
