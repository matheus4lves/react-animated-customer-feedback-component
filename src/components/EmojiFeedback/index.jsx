import React from "react";
import styled from "styled-components";
import { Flex } from "../../styles/globalStyles";
import Emoji from "./Emoji";
import { reactions } from "./data";

const EmojiFeedback = ({ activeReaction, setActiveReaction }) => {
  return (
    <Card>
      <Heading>How was your experience?</Heading>
      <Content column>
        <Emojis>
          {/* We have five emojis. Only one of them is going to be selected at a time.
            Each reaction has a prop of called reaction, which contains the text that
            defines the reaction. When we select an emoji, the activeReaction will be
            set to the text that represents that reaction. Only the emoji that has its
            reaction prop equals to the activeReaction will have its isSelectec prop
            set to true. */}
          {reactions.map(reaction => (
            <Emoji reaction={reaction} key={reaction} isSelected={activeReaction === reaction} setActiveReaction={setActiveReaction} />
          ))}
        </Emojis>
        <Button isSelected={!!activeReaction}>Submit</Button>
      </Content>
    </Card>
  );
};

const Card = styled.div`
  width: 800px;
  height: 500px;
  background-color: #fff;
  border-radius: 33px;
  padding: 44px 48px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);

  @media (max-width: 930px) {
    width: 80%;
  }
`;

const Heading = styled.h2`
  font-size: 42px;
  font-weight: bold;
  margin: 0;
  color: #000;
  font-family: Plus Jakarta Sand Bold;
`;

const Content = styled(Flex)`
  height: 452px;
  position: relative;
`;

const Emojis = styled(Flex)`
  top: 30%;
`;

const Button = styled.button`
  background-color: ${props => (props.isSelected ? "#000" : "#ccc")};
  cursor: ${props => (props.isSelected ? "pointer" : "not-allowed")};
  border: none;
  color: #fff;
  padding: 19.5px 107.3px;
  border-radius: 19px;
  font-family: Plus Jakarta Sans Medium;
  font-size: 24px;
  user-select: none;
  position: absolute;
  bottom: 0;
`;

export default EmojiFeedback;
