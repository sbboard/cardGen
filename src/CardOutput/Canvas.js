import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  function invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase()
  }

  const cardRef = useRef(null);
  useEffect(() => {
    const canvas = cardRef.current;

    const ctx = canvas.getContext("2d");
    let card = canvas;

    const borderThickness = props.cardWidth * .1;
    card.width = props.cardWidth + borderThickness;
    card.height = props.cardHeight + borderThickness;
    let zoom = props.zoomAmt;
    let leftCrop = props.leftCrop;
    let topCrop = props.topCrop;

    let startBuild = new Promise(function (resolve, reject) {
      let img = new Image();
      img.src = props.playerImg;
      img.onload = function () {
        ctx.drawImage(
          img,
          leftCrop + borderThickness,
          topCrop + borderThickness,
          img.width * zoom,
          img.height * zoom
        );
        resolve();
      };
    });

    function topLayer() {
      //innerborder
      ctx.fillStyle = '#' + props.cardColor;
      //top border
      ctx.fillRect(0, 0, card.width, borderThickness);
      //left border
      ctx.fillRect(0, 0, borderThickness, card.height);
      //right border
      ctx.fillRect(
        card.width - borderThickness,
        0,
        borderThickness,
        card.height
      );
      //bottom border
      ctx.fillRect(
        0,
        card.height - borderThickness,
        card.width,
        borderThickness
      );

      //outerborder
      ctx.fillStyle = "#" + invertHex(props.cardColor)
      //top border
      ctx.fillRect(0, 0, card.width, borderThickness * .75);
      //left border
      ctx.fillRect(0, 0, borderThickness / 3, card.height);
      //right border
      ctx.fillRect(
        card.width  - (borderThickness - (borderThickness /3) * 2),
        0,
        borderThickness,
        card.height
      );
      //bottom border
      ctx.fillRect(
        0,
        card.height - (borderThickness * .75),
        card.width,
        borderThickness * 1.25
      );

      //add name
      const fontSize = card.width * 0.4;
      const nameText = props.playerName.toUpperCase();
      const textWidth = card.width * .6
      // ctx.font = `${fontSize}px Impact`;
      // ctx.fillStyle = "white";
      // ctx.fillText(
      //   nameText,
      //   borderThickness * 1.75,
      //   borderThickness + fontSize,
      //   textWidth
      // );
      // ctx.strokeStyle = "black";
      // ctx.lineWidth = 1;
      // ctx.strokeText(
      //   nameText,
      //   borderThickness * 1.75,
      //   borderThickness + fontSize,
      //   textWidth
      // );

      //add team text
      const descText = props.playerTeam.toUpperCase();
      ctx.font = `italic ${fontSize / 2}px Impact`;
      ctx.fillStyle = "white";
      ctx.fillText(
        `${descText}`,
        borderThickness - (card.width * .035),
        borderThickness + (card.height * .075),
        textWidth
      );
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.strokeText(
        `${descText}`,
        borderThickness - (card.width * .035),
        borderThickness + (card.height * .075),
        textWidth
      );

      //add year Text
      const year = 1996
      ctx.font = `italic ${fontSize / 5}px Impact`;
      ctx.fillStyle = "white";
      ctx.fillText(
        `${year} LINEUP`,
        borderThickness + (card.width * .0125),
        borderThickness + (card.height * .13),
        textWidth / 2
      );
      ctx.strokeStyle = "black";
      ctx.lineWidth = .75;
      ctx.strokeText(
        `${year} LINEUP`,
        borderThickness + (card.width * .0125),
        borderThickness + (card.height * .13),
        textWidth / 2
      );

      //add team thumbnail
      const thumbnailSize = fontSize / 1.5;
      let img = new Image();
      img.src = props.teamImg;
      img.onload = function () {
        ctx.drawImage(
          img,
          textWidth + borderThickness,
          borderThickness - (card.height * .05),
          thumbnailSize,
          thumbnailSize
        );
      };

    }

    startBuild.then(topLayer);
    var dwn = document.getElementById("btndownload");
    dwn.onclick = function () {
      download(canvas, "mycard-front.png");
    };

    //create download link
    function download(canvas, filename) {
      var lnk = document.createElement("a"),
        e;
      lnk.download = filename;
      lnk.href = canvas.toDataURL("image/png;base64");
      if (document.createEvent) {
        e = document.createEvent("MouseEvents");
        e.initMouseEvent(
          "click",
          true,
          true,
          window,
          0,
          0,
          0,
          0,
          0,
          false,
          false,
          false,
          false,
          0,
          null
        );
        lnk.dispatchEvent(e);
      } else if (lnk.fireEvent) {
        lnk.fireEvent("onclick");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

function reload(){
  window.location.reload()
}

  return (
    <div>
      <canvas ref={cardRef}>
        Your browser does not support the HTML5 canvas tag.
      </canvas>
      <button id="btndownload">Download Front</button>
      <button onClick={reload}>Another</button>
    </div>
  );
};

export default Canvas;
