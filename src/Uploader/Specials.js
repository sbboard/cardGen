import React, { useRef, useEffect } from "react";

const Specials = (props) => {
  const specialNameRef = useRef(null);
  const specialRef = useRef(null);

  useEffect(() => {
    specialNameRef.current.value = props.checkSpName;
    specialRef.current.value = props.checkSpSp;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateName() {
    props.setSpName(specialNameRef.current.value);
  }

  function updateSpecial() {
    props.setSp(specialRef.current.value);
  }

  return (
    <form>
      <label>Spirit Special</label>
      <input ref={specialNameRef} onChange={updateName}></input>
      <textarea ref={specialRef} onChange={updateSpecial}></textarea>
    </form>
  );
};

export default Specials;
