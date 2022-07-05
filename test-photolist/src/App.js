import React, { useState } from "react";
import { Context } from "./Context";
import styled from "styled-components";
import PhotoList from "./components/PhotoList";
import data from "../src/data/photo-data.json";

const Container = styled.div`
  max-width: 900px;
  margin: 50px auto 0;
`;

function App() {
  const [context, setContext] = useState(data);
  return (
    <Context.Provider value={[context, setContext]}>
      <Container>
        <PhotoList title="My List" photos={context.mylist} />
        <PhotoList title="Recommendation" photos={context.recommendations} />
      </Container>
    </Context.Provider>
  );
}

export default App;
