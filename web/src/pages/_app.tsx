import React from 'react';
import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';
import { PlayerContextProvider } from '../context/PlayerContext';
import { ModalContextProvider } from '../context/ModalContext';
import { AuthContextProvider } from '../context/AuthContext';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <AuthContextProvider>
      <PlayerContextProvider>
        <ModalContextProvider>
          <Component {...pageProps} />
          <GlobalStyle />
        </ModalContextProvider>
      </PlayerContextProvider>
    </AuthContextProvider>
  </>
);

export default MyApp;
