import React from 'react';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';

import './styles.css'

const Home: React.FC = () => {
  return (
    <>
      <Header />

      <div className="title">
        <h2>Tracks</h2>
      </div>

      <div className="cards-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default Home;