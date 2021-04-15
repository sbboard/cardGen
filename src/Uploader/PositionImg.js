import React, { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";

const PositionImg = (props) => {
  const frameStyle = { width: props.cardWidth, height: props.cardHeight };
  const theImg = useRef(null);
  const [baseZoom, setBase] = useState(1);
  const [baseWidth, setBaseWidth] = useState(null);
  const [baseHeight, setBaseHeight] = useState(null);

  useEffect(() => {
    function updateImgSize() {
      changeBoundaries({
        left: props.cardWidth - theImg.current.width,
        top: props.cardHeight - theImg.current.height,
        right: 0,
        bottom: 0,
      });
    }
    let myImage = new Image();
    myImage.src = props.uploadedImg;
    myImage.onload = () => {
      setBaseWidth(theImg.current.width);
      setBaseHeight(theImg.current.height);
      //something in this if statement chain is killing gallery images
      if (
        theImg.current.width > props.cardWidth &&
        theImg.current.height > props.cardHeight
      ) {
        console.log(theImg.current.width);
        console.log(theImg.current.height);
        if (
          props.cardWidth - theImg.current.width >
          props.cardHeight - theImg.current.height
        ) {
          let newZoom = props.cardWidth / theImg.current.width;
          props.changeZoom(newZoom);
          setBase(newZoom);
          theImg.current.width = theImg.current.width * newZoom;
          updateImgSize();
        } else {
          let newZoom = props.cardHeight / theImg.current.height;
          props.changeZoom(newZoom);
          setBase(newZoom);
          theImg.current.height = theImg.current.height * newZoom;
          updateImgSize();
        }
      } else {
        if (
          props.cardWidth - theImg.current.width >
          props.cardHeight - theImg.current.height
        ) {
          //adjust the zoom radio
          if (props.zoom < props.cardWidth / theImg.current.width) {
            let newZoom = props.cardWidth / theImg.current.width;
            //zoom in
            props.changeZoom(newZoom);
            setBase(newZoom);
            theImg.current.width = theImg.current.width * newZoom;
            updateImgSize();
            //then center
            props.changeLeftCrop(
              ((theImg.current.width * props.zoom - props.cardWidth) / 2) * -1
            );
            props.changeTopCrop(
              ((theImg.current.height * props.zoom - props.cardHeight) / 2) * -1
            );
          }
        } else {
          //if the height is the shorter side
          if (props.zoom < props.cardHeight / theImg.current.height) {
            let newZoom = props.cardHeight / theImg.current.height;
            props.changeZoom(newZoom);
            setBase(newZoom);
            //zoom in
            theImg.current.height = theImg.current.height * newZoom;
            updateImgSize();
            props.changeLeftCrop(
              ((theImg.current.width - props.cardWidth) / 2) * -1
            );
            props.changeTopCrop(
              ((theImg.current.height - props.cardHeight) / 2) * -1
            );
          }
        }
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [boundaries, changeBoundaries] = useState({});

  function handleDrag() {
    window.event.preventDefault();
    changeBoundaries({
      left: props.cardWidth - theImg.current.width,
      top: props.cardHeight - theImg.current.height,
      right: 0,
      bottom: 0,
    });
  }

  function handUp() {
    let transform = theImg.current.style.transform;
    let coords = transform
      .slice(transform.indexOf("(") + 1, transform.indexOf(")"))
      .split(",");
    props.changeTopCrop(parseInt(parseInt(coords[1])));
    props.changeLeftCrop(parseInt(coords[0]));
  }
  const zoombar = useRef(null);

  function zoomTime() {
    console.log(zoombar.current.value);
    let zoomLvl = 1;
    if (zoombar.current.value > 1) {
      zoomLvl = zoombar.current.value - .5;
    }
    props.changeZoom(baseZoom * zoomLvl);
    theImg.current.width = baseWidth * (baseZoom * zoomLvl);
    theImg.current.height = baseHeight * (baseZoom * zoomLvl);
    //do a boundary check here
  }

  return (
    <div>
      <div id="frameHolder" style={frameStyle}>
        <div id="frame"></div>
        <Draggable
          onDrag={handleDrag}
          bounds={boundaries}
          onStop={handUp}
          defaultPosition={{ x: 0, y: 0 }}
        >
          <img
            id="uploadedImg"
            src={props.uploadedImg}
            alt="uploaded"
            ref={theImg}
          />
        </Draggable>
      </div>
      <input
        ref={zoombar}
        onChange={zoomTime}
        type="range"
        min="1"
        max="10"
        defaultValue="1"
      ></input>
      <br />
      left: {props.leftCrop} top: {props.topCrop} zoom: {props.zoom} <br />
      base zoom: {baseZoom}
    </div>
  );
};

export default PositionImg;
