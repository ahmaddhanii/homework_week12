// Square.js
import React from 'react';
import { Box, Button } from '@chakra-ui/react';

function Square(props) {
  return (
    <Box>
      <Button
        variant="outline"
        size="md"
        onClick={props.onClick}
        fontSize="2xl"
      >
        {props.value}
      </Button>
    </Box>
  );
}

export default Square;
