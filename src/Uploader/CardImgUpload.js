import React, { useRef, useState } from "react";
import demoImg1 from "./templateImgs/1.jpg";
import demoImg2 from "./templateImgs/2.jpg";
import demoImg3 from "./templateImgs/3.jpg";
import demoImg4 from "./templateImgs/4.jpg";

const CardImgUploader = (props) => {
  //gallery stuff
  const [galleryOn, setGallery] = useState(false);
  const switchGallery = () => {
    setGallery(!galleryOn);
  };
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

  //uploader stuff
  const uploadRef = useRef(null);

  function clickUpload(e) {
    document.getElementById("filetag").click();
  }
  function uploadedImg() {
    var reader = new FileReader();
    reader.onload = function (e) {
      props.changeImg(e.target.result);
    };
    reader.readAsDataURL(uploadRef.current.files[0]);
    // console.log(uploadRef)
    // //console.log(uploadRef.current.files[0])
  }

  let normalUploader = (
    <div>
      <div className="imgBox" onClick={clickUpload}>
        Upload Card Portrait
      </div>
      <input
        type="file"
        id="filetag"
        accept="image/x-png,image/gif,image/jpeg"
        onChange={uploadedImg}
        ref={uploadRef}
      />
      <span id="preSelect" onClick={switchGallery}>
        or use a demo portrait
      </span>
    </div>
  );

  return galleryOn ? gallery : normalUploader;
};

export default CardImgUploader;
