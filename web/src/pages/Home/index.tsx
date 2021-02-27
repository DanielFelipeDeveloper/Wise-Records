import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import FooterPlayer from '../../components/FooterPlayer';

import api from '../../services/api';

import { Cards, Title } from './styles';

interface Beats {
  name: string;
  image: string;
  style: string;
  bpm: string;
  price: number;
}

const Home: React.FC = () => {
  const [beats, setBeats] = useState<Beats[]>();

  console.log(beats);

  const getBeats = async () => {
    const response = await api.get('/beats');

    setBeats(response.data);
  };

  useEffect(() => {
    getBeats();
  }, []);

  return (
    <>
      <Header />

      <Title>
        <h2>Beats</h2>
      </Title>

      <Cards>
        {beats?.map((beat) => (
          <Card
            name={beat.name}
            image={beat.image}
            style={beat.style}
            bpm={beat.bpm}
            price={beat.price}
          />
        ))}
      </Cards>

      <FooterPlayer />
    </>
  );
};

export default Home;
