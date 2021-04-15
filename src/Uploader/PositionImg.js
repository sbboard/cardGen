import React, { useRef, useEffect } from "react";

const PositionImg = (props) => {
  const frameStyle = { width: props.cardWidth, height: props.cardHeight };
  const imgCoords = { left: props.leftCrop, top: props.topCrop };
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
    dragElement(theImg);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function dragElement(elmnt) {
    var pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
    elmnt.current.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      //check top wall
      if (props.cardHeight + (elmnt.current.offsetTop - pos2) <= 0) {
        console.log("pee2n");
        elmnt.current.style.top = elmnt.current.offsetTop - pos2 + "px";
      } else {
        elmnt.current.style.top = 0;
      }
      //check left & right wall
      if (
        elmnt.current.offsetLeft - pos2 <= 0 &&
        elmnt.current.offsetLeft - pos2 > props.cardWidth - theImg.current.width
      ) {
        elmnt.current.style.left = elmnt.current.offsetLeft - pos1 + "px";
      } else {
        if (
          elmnt.current.offsetLeft - pos2 <=
          props.cardWidth - theImg.current.width
        ) {
          elmnt.current.style.left =
            props.cardWidth - theImg.current.width + "px";
        } else {
          elmnt.current.style.left = 0;
        }
      }
    }

    function closeDragElement() {
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.onmousemove = null;
      props.changeLeftCrop(elmnt.current.style.left);
      props.changeTopCrop(elmnt.current.style.top);
    }
  }

  return (
    <div>
      <div id="frameHolder" style={frameStyle}>
        <div id="frame"></div>
        <img
          id="uploadedImg"
          style={imgCoords}
          src={props.uploadedImg}
          alt="uploaded"
          ref={theImg}
        />
      </div>
      left: {props.leftCrop} top: {props.topCrop} zoom: {props.zoom}
    </div>
  );
};

export default PositionImg;
