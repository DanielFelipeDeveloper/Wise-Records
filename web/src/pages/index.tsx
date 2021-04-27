import React from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Player from '../components/Player';
import api from '../services/api';
import Card from '../components/Card';

import { Cards, Title } from '../styles/home';

type Beat = {
  id: string,
  image: string,
  audio: string,
  name: string,
  style: string,
  bpm: string,
  price: number,
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

    <Cards>
      {beats.map((beat) => (
        <Card
          key={beat.id}
          image={beat.image}
          name={beat.name}
          style={beat.style}
          bpm={beat.bpm}
          price={beat.price}
        />
      ))}
    </Cards>

    <Player />
  </>
);

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await api.get('beats');
  const baseURL = 'http://192.168.2.105:3333';

  const beats = data.map((beat) => ({
    id: beat.id,
    image: `${baseURL}/files/${beat.image}`,
    audio: `${baseURL}/audio/${beat.audio}`,
    name: beat.name,
    style: beat.style,
    bpm: `${beat.bpm} BPM`,
    price: `R$ ${beat.price}.00`,
  }));

  return {
    props: {
      beats,
    },
    revalidate: 60 * 60 * 8,
  };
};
