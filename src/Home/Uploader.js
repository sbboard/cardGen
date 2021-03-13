import { useState } from "react";

const Uploader = props => {
  const bigManState = useState('cool');
  
console.log(bigManState)

  let peen = "peendog"
  return <div>one big {props.name + 5 + peen} and ofc {bigManState}</div>;
};

export default Uploader;