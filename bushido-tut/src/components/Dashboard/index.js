import React from "react";

import { Wrapper, Linkton } from "bushido-strap";

export default function Dashboard() {
  return (
    <Wrapper>
      <h1>Hello, world!</h1>
      <Linkton to="/counter" onClick={() => alert("Hey!")}>
        Redux Counter
      </Linkton>
    </Wrapper>
  );
}
