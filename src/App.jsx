import React, { useState } from "react";
import styled from "styled-components";
import EmojiFeedback from "./components/EmojiFeedback";

const App = () => {
  const [activeReaction, setActiveReaction] = useState("");

  return (
    <AppStyles>
      <EmojiFeedback activeReaction={activeReaction} setActiveReaction={setActiveReaction} />
    </AppStyles>
  );
};

const AppStyles = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8ebe2;
`;

export default App;
