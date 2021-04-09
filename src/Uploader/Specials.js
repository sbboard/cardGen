// import { useState } from "react";
import React, { useRef } from "react";

const Specials = (props) => {
  const specialNameRef = useRef(null);
  const specialRef = useRef(null);

  function updateName() {
    props.setSpName(specialNameRef.current.value)
  }

  function updateSpecial() {
    props.setSp(specialRef.current.value)}

  return (
    <form>
      <label>Spirit Special</label>
      <input ref={specialNameRef} onChange={updateName}></input>
      <textarea ref={specialRef} onChange={updateSpecial}></textarea>
    </form>
  );
};

export default Specials;
