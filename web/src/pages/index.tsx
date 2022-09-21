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

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    beats: [
      {
        id: 1,
        image: 'https://wallpaperaccess.com/full/5169124.png',
        audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        name: 'Psychedelic Beat',
        style: 'Boombap',
        bpm: '125 BPM',
        price: 'R$ 99.00',
        duration: 123121233,
        durationAsString: '2:00',
      },
      {
        id: 2,
        image: 'https://m.media-amazon.com/images/I/218TsHfnmFL._UXNaN_FMjpg_QL85_.jpg',
        audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        name: 'Trap Beat',
        style: 'Trap',
        bpm: '130 BPM',
        price: 'R$ 99.00',
        duration: 123121233,
        durationAsString: '2:00',
      },
      {
        id: 2,
        image: 'https://www.batidasdabanda.com/wp-content/uploads/2022/03/a3608993084_10.jpg',
        audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        name: 'Hard Beat',
        style: 'Boombap',
        bpm: '125 BPM',
        price: 'R$ 99.00',
        duration: 123121233,
        durationAsString: '2:00',
      },
      {
        id: 2,
        image: 'https://w7.pngwing.com/pngs/385/938/png-transparent-rapper-hip-hop-music-art-drawing-beat-travis-scott-head-beat-dope.png',
        audio: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
        name: 'Psychedelic Beat',
        style: 'Boombap',
        bpm: '125 BPM',
        price: 'R$ 99.00',
        duration: 123121233,
        durationAsString: '2:00',
      },
    ],
  },
  revalidate: 60 * 60 * 8,
});
