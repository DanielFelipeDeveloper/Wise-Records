import React from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import FooterPlayer from '../../components/FooterPlayer';

import { Cards, Title } from './styles';

const Home: React.FC = () => {
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
