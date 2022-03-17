import amazingAnimationData from "./amazing.json";
import awefulAnimationData from "./aweful.json";
import badAnimationData from "./bad.json";
import goodAnimationData from "./good.json";
import okOkAnimationData from "./ok-ok.json";

import { reactions } from "../components/EmojiFeedback/data";

const selectAnimationData = reaction => {
  switch (reaction) {
    case reactions[0]:
      return awefulAnimationData;
    case reactions[1]:
      return badAnimationData;
    case reactions[2]:
      return okOkAnimationData;
    case reactions[3]:
      return goodAnimationData;
    case reactions[4]:
      return amazingAnimationData;
    default:
      return null;
  }
};

export default selectAnimationData;
