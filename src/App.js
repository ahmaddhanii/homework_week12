// App.js
import React from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import Game from './Game';

const theme = extendTheme({
  // Menyesuaikan tema sesuai keinginan Anda
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Game />
    </ChakraProvider>
  );
}

export default App;
