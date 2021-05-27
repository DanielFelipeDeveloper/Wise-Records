import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';

import Header from '../components/Header';
import Player from '../components/Player';
import Cards from '../components/Cards';

import api from '../services/api';

import { CardsContainer, Title } from '../styles/home';
import { convertDurationToTimeString } from '../utils/convertDurationToTimeString';

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

type HomeProps = {
  beats: Beat[];
};

const Home: React.FC<HomeProps> = ({ beats }) => (
  <>
    <Head>
      <title>Wise Records</title>
    </Head>

    <Header />

    <Title>
      <h2>Beats</h2>
    </Title>

    <CardsContainer>
      <Cards beats={beats} />
    </CardsContainer>

    <Player />
  </>
);

export default Home;

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
