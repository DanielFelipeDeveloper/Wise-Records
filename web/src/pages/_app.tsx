import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import { PlayerContextProvider } from '../context/PlayerContext';
import { ModalContextProvider } from '../context/ModalContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <PlayerContextProvider>
      <ModalContextProvider>
        <Component {...pageProps} />
        <GlobalStyle />
      </ModalContextProvider>
    </PlayerContextProvider>
  </>
);

export default MyApp;
