import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import FooterPlayer from '../../components/FooterPlayer';

import api from '../../services/api';

import { Cards, Title } from './styles';

interface Beats {
  image: string;
  name: string;
  style: string;
  bpm: string;
  price: number;
}

const Home: React.FC = () => {
  const [beats, setBeats] = useState<Beats[]>();

  const getBeats = async () => {
    try {
      const response = await api.get('/beats');

      setBeats(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBeats();
  }, []);

  console.log(beats);

  return (
    <>
      <Header />

      <Title>
        <h2>Beats</h2>
      </Title>

      <Cards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Cards>

      <FooterPlayer />
    </>
  );
};

export default Home;
