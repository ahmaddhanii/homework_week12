import React from 'react';
import Square from './Square';
import { Flex, Box } from '@chakra-ui/react';

function Board(props) {
  function renderSquare(i) {
    return (
      <Box key={i}>
        <Square
          value={props.squares[i]}
          onClick={() => props.onClick(i)}
        />
      </Box>
    );
  }

  return (
    <Flex direction="column">
      <Flex direction="row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </Flex>
      <Flex direction="row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </Flex>
      <Flex direction="row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </Flex>
    </Flex>
  );
}

export default Board;
