import { useState } from "react";

import NestedParagraph from "./NestedParagraph";

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const changeTextHandler = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello World!</h2>
      {!changedText && <NestedParagraph>It's good to see you!</NestedParagraph>}
      {changedText && <NestedParagraph>Changed!</NestedParagraph>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greeting;
