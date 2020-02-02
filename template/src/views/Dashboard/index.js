import React from "react";

import { Wrapper, Linkton, Card } from "bushido-strap";

export default function Dashboard() {
  return (
    <Wrapper>
      <Card>
        <h1>Hello, world!</h1>
        <Linkton to="/counter">Redux Counter</Linkton>
      </Card>
    </Wrapper>
  );
}
