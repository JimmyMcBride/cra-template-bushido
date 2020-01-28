import React from "react";

import { Wrapper, FlexBox, Button, Box, Card } from "bushido-strap";

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
      <Card invert width="20rem" shade>
        <Box height="2rem" />
        <Button invert onClick={() => dispatch(increment())}>
          ++
        </Button>
        <Box height="2rem" />
        <FlexBox ac_center jc_around width="75%">
          <Box>Clicked</Box>
          <Box>
            <code>{count}</code>
          </Box>
          <Box>times!!!</Box>
        </FlexBox>
        <Box height="2rem" />
        <Button invert onClick={() => dispatch(decrement())}>
          --
        </Button>
        <Box height="2rem" />
      </Card>
    </Wrapper>
  );
}
