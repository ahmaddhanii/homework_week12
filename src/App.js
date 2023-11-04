import React from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import Game from './Game';

const theme = extendTheme({

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
