import React, { useState } from "react";

function Reactions() {

    const [fx, setFx] = useState(false);
    const [fy, setFy] = useState(false);
    const [fz, setFz] = useState(false);
    const [mx, setMx] = useState(false);
    const [my, setMy] = useState(false);
    const [mz, setMz] = useState(false);

    


    return(
        <div>
            <form action="submit">
                <div class='column'>
                    <input type="checkbox" id="fx" name='fx'/>
                    <label for='fy'>Fy</label>
                    <input type="checkbox" id="fy" name='fy'/>
                    <label for='fz'>Fz</label>
                    <input type="checkbox" id="fz" name='fz'/>
                    <label for='mx'>Mx</label>
                </div>
                <div>
                    <input type="checkbox" id="mx" name='mx'/>
                    <label for='my'>My</label>
                    <input type="checkbox" id="my" name='my'/>
                    <label for='fx'>Fx</label>
                    <input type="checkbox" id="fz" name='fx'/>
                    <label for='fx'>Fx</label>
                </div>

                <button type='submit'>Generate Table</button>
                
            </form>
        </div>
    )
}

export default Reactions