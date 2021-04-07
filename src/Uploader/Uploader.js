import { useState } from "react";
import Instructions from "./Instructions";

import StepOne from "./CardImgUpload";
import StepTwo from "./SelectTeam";
import StepThree from "./PositionImg";
import StepFour from "./PlayerStats";
import StepFive from "./PositionImgCircle";
import StepSix from "./Specials";
import StepSeven from "./FunFact";

const Uploader = (props) => {
  //STEP CHANGERS
  const [uploadStep, setStep] = useState(0);

  function nextStep() {
    if (uploadStep < instructions.length - 1) {
      setStep(uploadStep + 1);
    }
  }

  function prevStep() {
    if (uploadStep !== 0) {
      setStep(uploadStep - 1);
    }
  }

  //STEPS
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
        return <StepTwo changeTeam={props.changeTeam}></StepTwo>;
      case 2:
        return <StepThree></StepThree>;
      case 3:
        return (
          <StepFour
            changeName={props.changeName}
            changeNumber={props.changeNumber}
          ></StepFour>
        );
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

  //BUTTONS
  function doItForMeBTN() {
    if (uploadStep !== 0 && uploadStep !== 2 && uploadStep !== 4) {
      return <button>Do This Step For Me</button>;
    }
  }

  function prevBtn() {
    let disabled = false;
    if (uploadStep === 0) {
      disabled = true;
    } else {
      disabled = false;
    }
    return (
      <button onClick={prevStep} disabled={disabled}>
        prev step
      </button>
    );
  }

  return (
    <div id="uploader">
      <Instructions
        msg={instructions[uploadStep][0]}
        descrip={instructions[uploadStep][1]}
      />
      {renderOptions(uploadStep)}
      <br></br>
      {doItForMeBTN()}
      <br></br>
      {prevBtn()}
      <button onClick={nextStep}>next step</button>
    </div>
  );
};

export default Uploader;
