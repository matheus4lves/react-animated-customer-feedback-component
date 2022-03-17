import React, { useEffect } from "react";
import lottie from "lottie-web";
import { motion } from "framer-motion";
import styled from "styled-components";
import md5 from "crypto-js/md5";
import selectAnimationData from "../../lotties";

const NORMAL_SCALE = 1;
const HOVERED_SCALE = 1.3;
const SELECTED_SCALE = 1.5;

const Emoji = ({ reaction, isSelected, setActiveReaction }) => {
  // Generate an id for the element that will contain the animation
  const id = "id-" + md5(reaction).toString();

  useEffect(() => {
    // Set up the animation data
    const animationOptions = {
      animationData: selectAnimationData(reaction),
      loop: true,
      autoplay: false,
      renderer: "svg",
      container: document.querySelector(`#${id}`),
      name: reaction,
    };

    // Load the animantion
    lottie.loadAnimation(animationOptions);
  }, []);

  const handleClick = () => {
    // Check if the clicked emoji is already selected
    // If so, deselect it
    if (isSelected) {
      setActiveReaction("");
      // If not, select it and play the reaction
    } else {
      setActiveReaction(reaction);
      // Play the animation when the emoji is selected
      lottie.play(reaction);
    }
  };

  // Stop the animation when the emoji is deselected
  if (!isSelected) lottie.stop(reaction);

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
      <StyledEmoji id={id} />
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
  width: 100%;
  font-family: "Plus Jakarta Sans Bold";
  font-size: 1rem;
  user-select: none;
`;

const StyledEmoji = styled.div`
  width: auto;
  height: 100px;
`;

export default Emoji;
