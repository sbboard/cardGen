import React, { useRef } from "react";

const FunFact = (props) => {
  
  const factInput = useRef(null);

  function updateFact() {
    props.setFact(factInput.current.value)
  }
  return(
    <form>
      <label>Fun Fact</label>
      <textarea ref={factInput} onChange={updateFact}></textarea>
    </form>
  )
};

export default FunFact;

