import React, { useRef, useEffect } from "react";

const FunFact = (props) => {
  useEffect(() => {
    if (props.checkFact !== null) {
      factInput.current.value = props.checkFact;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const factInput = useRef(null);

  function updateFact() {
    props.setFact(factInput.current.value);
  }
  return (
    <form>
      <label>Fun Fact</label>
      <textarea ref={factInput} onChange={updateFact}></textarea>
    </form>
  );
};

export default FunFact;
