import React, { useRef, useEffect } from "react";
import SClogo from "./cardElements/SClogo.png";

const Canvas = (props) => {
  function invertHex(hex) {
    return (Number(`0x1${hex}`) ^ 0xffffff)
      .toString(16)
      .substr(1)
      .toUpperCase();
  }

  function adjust(color, amount) {
    return (
      "#" +
      color
        .replace(/^#/, "")
        .replace(/../g, (color) =>
          (
            "0" +
            Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(
              16
            )
          ).substr(-2)
        )
    );
  }

  const cardRef = useRef(null);
  useEffect(() => {
    const canvas = cardRef.current;

    const ctx = canvas.getContext("2d");
    let card = canvas;

    const borderThickness = props.cardWidth * 0.15;
    card.width = props.cardWidth + borderThickness * 2;
    card.height = props.cardHeight + borderThickness * 2;
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
      var bggrdd = ctx.createLinearGradient(0, 0, 0, card.height);
      bggrdd.addColorStop(0, adjust("#" + props.cardColor, 0));
      bggrdd.addColorStop(1, adjust("#" + props.cardColor, 50));
      ctx.fillStyle = bggrdd;
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
      var bggrd = ctx.createLinearGradient(0, 0, 0, card.height);
      bggrd.addColorStop(0, adjust("#" + props.seccardColor, -50));
      bggrd.addColorStop(1, adjust("#" + props.seccardColor, 0));
      ctx.fillStyle = bggrd;
      //top border
      ctx.fillRect(0, 0, card.width, borderThickness * 0.75);
      //left border
      ctx.fillRect(0, 0, borderThickness / 3, card.height);
      //right border
      ctx.fillRect(
        card.width - (borderThickness - (borderThickness / 3) * 2),
        0,
        borderThickness,
        card.height
      );
      //bottom border
      ctx.fillRect(
        0,
        card.height - borderThickness * 0.75,
        card.width,
        borderThickness * 1.25
      );
      const fontSize = card.width * 0.3;
      const thumbnailSize = fontSize / 1.5;
      const nameText = props.playerName.toUpperCase();
      const textWidth = card.width * 0.6;

      //stripes
      ctx.fillStyle = adjust("#" + props.cardColor, 100);
      ctx.fillRect(
        0,
        card.height / 2 - (borderThickness / 3) * 2,
        borderThickness / 3,
        borderThickness / 5
      );
      ctx.fillRect(
        0,
        card.height / 2 - borderThickness / 3,
        borderThickness / 3,
        borderThickness / 5
      );
      ctx.fillRect(
        0,
        card.height / 2 + borderThickness / 3,
        borderThickness / 3,
        borderThickness / 5
      );
      ctx.fillRect(
        0,
        card.height / 2 + (borderThickness / 3) * 2,
        borderThickness / 3,
        borderThickness / 5
      );

      ctx.fillRect(
        card.width - borderThickness / 3,
        card.height / 2 - (borderThickness / 3) * 2,
        borderThickness / 3,
        borderThickness / 5
      );
      ctx.fillRect(
        card.width - borderThickness / 3,
        card.height / 2 + borderThickness / 3,
        borderThickness / 3,
        borderThickness / 5
      );

      ctx.fillRect(
        card.width - borderThickness / 3,
        card.height / 2 - borderThickness / 3,
        borderThickness / 3,
        borderThickness / 5
      );
      ctx.fillRect(
        card.width - borderThickness / 3,
        card.height / 2 + (borderThickness / 3) * 2,
        borderThickness / 3,
        borderThickness / 5
      );

      //add team status

      ctx.rotate((-90 * Math.PI) / 180);
      ctx.font = `${fontSize / 5}px Impact`;
      ctx.fillStyle = "white";
      console.log(card.height);
      ctx.fillText(
        props.teamtype,
        ((card.height - ctx.measureText(props.teamtype).width) / 2) * 2.4 * -1,
        borderThickness - borderThickness * 0.125,
        textWidth
      );

      ctx.rotate((90 * Math.PI) / 180);

      //add rank
      if (props.rank !== null) {
        ctx.font = `italic ${fontSize / 3}px Impact`;
        ctx.lineWidth = 5;
        let grd;
        if (props.rank === "MVP") {
          ctx.strokeStyle = "#da7e00";
          grd = ctx.createLinearGradient(
            0,
            card.height - card.height * 0.075,
            0,
            card.height - card.height * 0.025
          );
          grd.addColorStop(0, "yellow");
          grd.addColorStop(1, "#ffc300");
        } else {
          grd = ctx.createLinearGradient(
            0,
            card.height - card.height * 0.075,
            0,
            card.height - card.height * 0.025
          );
          grd.addColorStop(0, "white");
          ctx.strokeStyle = "grey";
          grd.addColorStop(1, "#ccc");
        }

        ctx.strokeText(
          `${props.rank}`,
          (card.width - ctx.measureText(props.rank).width) / 2,
          card.height - card.height * 0.0125
        );
        ctx.fillStyle = grd;
        ctx.fillText(
          `${props.rank}`,
          (card.width - ctx.measureText(props.rank).width) / 2,
          card.height - card.height * 0.0125
        );
      }

      //add name
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

      //add team name
      const descText = props.playerTeam.toUpperCase();
      ctx.font = `italic ${fontSize / 2}px Impact`;

      ctx.strokeStyle = "black";
      ctx.lineWidth = 15;
      ctx.strokeText(
        `${descText}`,
        borderThickness - card.width * 0.095,
        borderThickness + card.height * 0.025,
        textWidth + card.width * 0.05
      );

      //add year Text
      const year = 1996;
      ctx.font = `italic ${fontSize / 5}px Impact`;

      ctx.strokeStyle = "black";
      ctx.lineWidth = 7.5;
      ctx.strokeText(
        `${year} LINEUP`,
        borderThickness - card.width * 0.05,
        borderThickness + card.height * 0.07,
        textWidth / 2
      );

      ctx.fillStyle = "white";
      ctx.fillText(
        `${year} LINEUP`,
        borderThickness - card.width * 0.05,
        borderThickness + card.height * 0.07,
        textWidth / 2
      );

      ctx.font = `italic ${fontSize / 2}px Impact`;

      ctx.fillStyle = "white";
      ctx.fillText(
        `${descText}`,
        borderThickness - card.width * 0.095,
        borderThickness + card.height * 0.025,
        textWidth + card.width * 0.05
      );

      //add team thumbnail
      let img = new Image();
      img.src = props.teamImg;
      img.onload = function () {
        ctx.drawImage(
          img,
          textWidth + borderThickness - card.width * 0.015,
          borderThickness - card.height * 0.075,
          thumbnailSize + card.width * 0.085,
          thumbnailSize + card.width * 0.05
        );
      };

      //add SC logo
      let logoimg = new Image();
      logoimg.src = SClogo;
      logoimg.onload = function () {
        ctx.drawImage(
          logoimg,
          card.width - borderThickness,
          card.height - thumbnailSize / 1.75,
          thumbnailSize / 2,
          thumbnailSize / 2
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

  function reload() {
    window.location.reload();
  }

  return (
    <div>
      <canvas ref={cardRef}>
        Your browser does not support the HTML5 canvas tag.
      </canvas>
      <button id="btndownload">Download Card</button>
      <button onClick={reload}>Another</button>
    </div>
  );
};

export default Canvas;
