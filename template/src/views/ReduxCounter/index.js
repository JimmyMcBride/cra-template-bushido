import React from "react";

import { Wrapper, Flex, Button, Box, Card } from "bushido-strap";

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../store/actions/counter";

import { Link } from "react-router-dom";

export default function ReduxCounter() {
  const dispatch = useDispatch();

  const count = useSelector(state => state.counter.count);
  return (
    <Wrapper>
      <Link to="/">
        <h1>Home</h1>
      </Link>
      <Card invert w="20rem">
        <Box h="2rem" />
        <Button invert onClick={() => dispatch(increment())}>
          ++
        </Button>
        <Box h="2rem" />
        <Flex ac_center jc_around w="75%">
          <Box>Clicked</Box>
          <Box>
            <code>{count}</code>
          </Box>
          <Box>times!!!</Box>
        </Flex>
        <Box h="2rem" />
        <Button invert onClick={() => dispatch(decrement())}>
          --
        </Button>
        <Box h="2rem" />
      </Card>
    </Wrapper>
  );
}
