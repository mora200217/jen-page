// Button.jsx

/* import { useState } from 'react';*/
import { useState } from 'react';
import './Button.css'; 

export const Button = ({name, color, callback}) => {
    const [idx, setIdx] = useState(0); 

    const myCallback = () =>{
        if(!callback)
            return; 
             
        callback(idx); 
        setIdx(idx + 1); 
    }
    return(
        <>
            <input 
                className={`btn m-2 btn-${color ||'dark'}`}
                type="button" 
                value={name || "Not Defined"}
                onClick={myCallback}
                />
        </>
    )
}