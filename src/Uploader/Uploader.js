import { useState } from "react";
import Instructions from "./Instructions";

import StepOne from "./CardImgUpload";
import StepTwo from "./SelectTeam"
import StepThree from "./PositionImg"
import StepFour from "./PlayerStats"
import StepFive from "./PositionImgCircle"
import StepSix from "./Specials"
import StepSeven from "./FunFact"

const Uploader = (props) => {
  const [uploadStep, setStep] = useState(0);

  function nextStep() {
    if (uploadStep < instructions.length - 1) {
      setStep(uploadStep + 1);
    }
  }

  const instructions = [
    ["Upload Player Image", "description 1"],
    ["Select Team", "description 2"],
    ["Position Image", "description 3"],
    ["Player Stats", "description 4"],
    ["Position Image In Circle", "description 5"],
    ["Special Skills", "description 6"],
    ["Fun Fact", "description 7"],
  ];

  function renderOptions(param) {
    switch (param) {
      case 0:
        return <StepOne></StepOne>;
      case 1:
        return <StepTwo></StepTwo>;
      case 2:
        return <StepThree></StepThree>;
      case 3:
        return <StepFour></StepFour>;
      case 4:
        return <StepFive></StepFive>;
      case 5:
        return <StepSix></StepSix>;
      case 6:
        return <StepSeven></StepSeven>;
      default:
        return "foo";
    }
  }

  return (
    <div id="uploader">
      <Instructions
        msg={instructions[uploadStep][0]}
        descrip={instructions[uploadStep][1]}
      />
      {renderOptions(uploadStep)}
      <button onClick={nextStep}>next step</button>
    </div>
  );
};

export default Uploader;
