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
      <Card width="20rem">
        <Box height="2rem" />
        <Button onClick={() => dispatch(increment())}>++</Button>
        <Box height="2rem" />
        <FlexBox align="center" justify="space-between" width="12rem">
          Clicked <code>{count}</code> times!!!
        </FlexBox>
        <Box height="2rem" />
        <Button onClick={() => dispatch(decrement())}>--</Button>
        <Box height="2rem" />
      </Card>
    </Wrapper>
  );
}
