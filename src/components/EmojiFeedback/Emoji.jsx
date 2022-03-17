import React, { useEffect } from "react";
import lottie from "lottie-web";
import { motion } from "framer-motion";
import styled from "styled-components";

import selectAnimationData from "../../lotties";

const NORMAL_SCALE = 1;
const HOVERED_SCALE = 1.3;
const SELECTED_SCALE = 1.5;

const Emoji = ({ reaction, isSelected, setActiveReaction }) => {
  const handleClick = () => {
    if (isSelected) {
      setActiveReaction("");
    } else {
      setActiveReaction(reaction);
    }
  };

  useEffect(() => {
    const animationOptions = {
      animationData: selectAnimationData(reaction),
      loop: true,
      autoplay: false,
      renderer: "svg",
      container: document.querySelector(`#${reaction}`),
    };

    lottie.loadAnimation(animationOptions);
  }, []);

  return (
    <EmojiWrapper
      whileHover={{
        scale: isSelected ? SELECTED_SCALE : HOVERED_SCALE,
      }}
      animate={{
        scale: isSelected ? SELECTED_SCALE : NORMAL_SCALE,
      }}
      onClick={handleClick}
    >
      <div id={reaction} style={{ width: 100, height: 100 }} />
      {isSelected && <EmojiLabel>{reaction}</EmojiLabel>}
    </EmojiWrapper>
  );
};

const EmojiWrapper = styled(motion.div)`
  cursor: pointer;
  margin: 0 12px;
  position: relative;
`;

const EmojiLabel = styled.p`
  text-align: center;
  position: absolute;
  bottom: -32px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Plus Jakarta Sans Bold;
  font-size: 1rem;
  user-select: none;
`;

export default Emoji;
