import React, { useRef, useEffect, useState } from "react";
import Draggable from "react-draggable";

const PositionImg = (props) => {
  const frameStyle = { width: props.cardWidth, height: props.cardHeight };
  const theImg = useRef(null);

  useEffect(() => {
    //if it's smaller than the frame
    if (
      theImg.current.width < props.cardWidth ||
      theImg.current.height < props.cardHeight
    ) {
      //if the width is the shorter side
      if (
        props.cardWidth - theImg.current.width >
        props.cardHeight - theImg.current.height
      ) {
        //adjust the zoom radio
        if (props.zoom < props.cardWidth / theImg.current.width) {
          //zoom in
          props.changeZoom(props.cardWidth / theImg.current.width);
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
          //zoom in
          theImg.current.height = theImg.current.height * newZoom;
          props.changeLeftCrop(
            ((theImg.current.width - props.cardWidth) / 2) * -1
          );
          props.changeTopCrop(
            ((theImg.current.height - props.cardHeight) / 2) * -1
          );
        }
      }
    }
    changeBoundaries({
      left: props.cardWidth - theImg.current.width,
      top: props.cardHeight - theImg.current.height,
      right: 0,
      bottom: 0,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const [boundaries, changeBoundaries] = useState({});

  function handleDrag() {
    window.event.preventDefault();
  }

  function handUp() {
    let transform = theImg.current.style.transform;
    let coords = transform
      .slice(transform.indexOf("(") + 1, transform.indexOf(")"))
      .split(",");
    props.changeTopCrop(parseInt(parseInt(coords[1])));
    props.changeLeftCrop(parseInt(coords[0]));
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
      left: {props.leftCrop} top: {props.topCrop} zoom: {props.zoom}
    </div>
  );
};

export default PositionImg;
