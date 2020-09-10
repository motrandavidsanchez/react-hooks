import React, { useState } from 'react';
import {MultipleCustomHooks} from '../03-expample/MultipleCustomHooks';
import '../02-useEffect/effect.css';

export const RealExampleRef = () => {
    
    const [show, setShow] = useState(false);

    return (
        <div>
            <h1>Real Example Ref</h1>
            <hr></hr>

            { show && <MultipleCustomHooks /> }

            <button className="btn btn-primary mt-5"
                    onClick={() => {
                        setShow(!show);
                    }}
            >Show/Hiden
            </button>

        </div>
    )
}
