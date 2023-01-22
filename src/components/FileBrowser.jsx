import React, { useEffect } from "react";
import { useState } from "react";

function FileBrowser() {
  const [reactionData, setReactionData] = useState(null);

  let fileReader;

  const handleFileRead = (e) => {
    const content = fileReader.result;
    setReactionData(content.split("\n"));
  };

  const readData = (e) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(e.target.files[0]);
  };

  return (
    <div>
      This is where you can search for files
      <input onChange={readData} type="file" accept=".txt,.rc,.rtf" />
      <div>{reactionData}</div>
    </div>
  );
}

export default FileBrowser;
