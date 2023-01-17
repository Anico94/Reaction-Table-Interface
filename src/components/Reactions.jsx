import React, { useState } from "react";

function Reactions() {

    const [fx, setFx] = useState(true);

    


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
                    <input type="checkbox" id="fx" name='fx'/>
                    <label for='fx'>Fx</label>
                </div>
                
            </form>
        </div>
    )
}

export default Reactions