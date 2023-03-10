import React, { useState } from "react";

function Reactions() {
  const [fx, setFx] = useState(false);
  const [fy, setFy] = useState(false);
  const [fz, setFz] = useState(false);
  const [mx, setMx] = useState(false);
  const [my, setMy] = useState(false);
  const [mz, setMz] = useState(false);

  //keep track of the checkboxes
  const handleCheckBox = (e) => {
    switch (e.target.id) {
      case "fx":
        setFx(e.target.checked);
        break;
      case "fy":
        setFy(e.target.checked);
        break;
      case "fz":
        setFz(e.target.checked);
        break;
      case "mx":
        setMx(e.target.checked);
        break;
      case "my":
        setMy(e.target.checked);
        break;
      case "mz":
        setMz(e.target.checked);
        break;
    }
  };

  const selectedReactions = (e) => {
    e.preventDefault();
    console.log([fx, fy, fz, mx, my, mz]);
  };

  return (
    <div>
      <form action="submit">
        <div class="column">
          <input onChange={handleCheckBox} type="checkbox" id="fx" name="fx" />
          <label for="fx">Fx</label>
          <input onChange={handleCheckBox} type="checkbox" id="fy" name="fy" />
          <label for="fy">Fz</label>
          <input onChange={handleCheckBox} type="checkbox" id="fz" name="fz" />
          <label for="fz">Fz</label>
        </div>
        <div>
          <input onChange={handleCheckBox} type="checkbox" id="mx" name="mx" />
          <label for="mx">Mx</label>
          <input onChange={handleCheckBox} type="checkbox" id="my" name="my" />
          <label for="my">My</label>
          <input onChange={handleCheckBox} type="checkbox" id="fz" name="fx" />
          <label for="Mz">Mz</label>
        </div>

        <button onClick={selectedReactions} type="submit">
          Generate Table
        </button>
      </form>
    </div>
  );
}

export default Reactions;
