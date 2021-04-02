import { useState } from "react";

import Instructions from "./Instructions";

import demoImg1 from "./templateImgs/1.jpg";
import demoImg2 from "./templateImgs/2.jpg";
import demoImg3 from "./templateImgs/3.jpg";
import demoImg4 from "./templateImgs/4.jpg";

const Uploader = (props) => {
  const [galleryOn, setGallery] = useState(false);

  const [uploadStep, setStep] = useState(0);

  const switchGallery = () => {
    setGallery(!galleryOn);
  };

  function clickUpload(e) {
    document.getElementById("filetag").click();
  }

  function nextStep() {
    if (uploadStep < instructions.length - 1) {
      setStep(uploadStep + 1);
    }
  }

  let normalUploader = (
    <div>
      <div className="imgBox" onClick={clickUpload}>
        Upload Card Portrait
      </div>
      <input
        type="file"
        id="filetag"
        // onChange={changeImage(this)}
        accept="image/x-png,image/gif,image/jpeg"
      />
      <span id="preSelect" onClick={switchGallery}>
        or use a demo portrait
      </span>
    </div>
  );

  let gallery = (
    <div>
      <h2>Demo Portraits:</h2>
      <div id="demoPorts">
        <img src={demoImg1} alt="StrikeOut Logo" />
        <img src={demoImg2} alt="StrikeOut Logo" />
        <img src={demoImg3} alt="StrikeOut Logo" />
        <img src={demoImg4} alt="StrikeOut Logo" />
      </div>
      <span id="preSelect" onClick={switchGallery}>
        return to uploader
      </span>
    </div>
  );

  const instructions = ["first step", "second step", "third step"];
  const currentStep = [normalUploader, gallery];

  return (
    <div id="uploader">
      <Instructions msg={instructions[uploadStep]} />
      {currentStep[uploadStep]}
      {/* one big {props.name + 5 + peen} and ofc {bigManState} */}
      {/* {galleryOn ? gallery : normalUploader} */}
      <button onClick={nextStep}>next step</button>
    </div>
  );
};

export default Uploader;
