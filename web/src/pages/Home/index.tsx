import React from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';

import { Cards, Title } from './styles';

const Home: React.FC = () => (
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
  </>
);

export default Home;
