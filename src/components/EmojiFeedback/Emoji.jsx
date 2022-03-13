import React, { useEffect } from "react";
import lottie from "lottie-web";
import { motion } from "framer-motion";
import styled from "styled-components";
import okOk from "../../lotties/ok-ok.json";

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
      animationData: okOk,
      loop: true,
      autoplay: true,
      renderer: "svg",
      container: document.querySelector("#ok-ok"),
    };

    lottie.loadAnimation(animationOptions);
  }, []);

  return <div id="ok-ok" style={{ width: 200, height: 200 }} />;
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
