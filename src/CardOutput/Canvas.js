import React, { useRef, useEffect } from "react";

const Canvas = (props) => {
  const cardRef = useRef(null);
  useEffect(() => {
    const canvas = cardRef.current;

    const ctx = canvas.getContext("2d");
    let card = canvas;

    card.width = props.cardWidth;
    card.height = props.cardHeight;
    let zoom = props.zoomAmt;
    let leftCrop = props.leftCrop;
    let topCrop = props.topCrop;

    let startBuild = new Promise(function (resolve, reject) {
      let img = new Image();
      img.src = props.playerImg;
      img.onload = function () {
        ctx.drawImage(
          img,
          leftCrop,
          topCrop,
          img.width * zoom,
          img.height * zoom
        );
        resolve();
      };
    });

    function topLayer() {
      //create border
      const borderThickness = card.width * 0.032;
      ctx.fillStyle = props.cardColor;
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

      //add name
      const fontSize = card.width * 0.128;
      const nameText = props.playerName.toUpperCase();
      const textWidth = card.width - fontSize * 1.3 - borderThickness * 4;
      ctx.font = `${fontSize}px Impact`;
      ctx.fillStyle = "white";
      ctx.fillText(
        nameText,
        borderThickness * 1.75,
        borderThickness + fontSize,
        textWidth
      );
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.strokeText(
        nameText,
        borderThickness * 1.75,
        borderThickness + fontSize,
        textWidth
      );

      //add description text
      const descText = props.playerTeam.toUpperCase();
      const posText = props.playerPosition.toUpperCase();
      ctx.font = `${fontSize / 2}px Impact`;
      ctx.fillStyle = "white";
      ctx.fillText(
        `${descText} \u2022 ${posText}`,
        borderThickness * 1.75,
        borderThickness + fontSize * 1.5,
        textWidth
      );
      ctx.strokeStyle = "black";
      ctx.lineWidth = 1;
      ctx.strokeText(
        `${descText} \u2022 ${posText}`,
        borderThickness * 1.75,
        borderThickness + fontSize * 1.5,
        textWidth
      );

      //add team thumbnail
      const thumbnailSize = fontSize * 1.3;
      let img = new Image();
      img.src = props.teamImg;
      img.onload = function () {
        ctx.drawImage(
          img,
          card.width - borderThickness * 1.75 - thumbnailSize,
          borderThickness * 1.75,
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

  return (
    <div>
      <canvas ref={cardRef}>
        Your browser does not support the HTML5 canvas tag.
      </canvas>
      <button id="btndownload">Download Front</button>
    </div>
  );
};

export default Canvas;
