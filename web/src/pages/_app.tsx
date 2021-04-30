import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import { PlayerContextProvider } from '../context/PlayerContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <PlayerContextProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </PlayerContextProvider>
  </>
);

export default MyApp;
