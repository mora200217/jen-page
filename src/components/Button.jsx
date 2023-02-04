// Button.jsx

/* import { useState } from 'react';*/
import './Button.css'; 

export const Button = ({name, color}) => {
    
    return(
        <>
            <input 
                className={`btn m-2 btn-${color ||'dark'}`}
                type="button" 
                value={name || "Not Defined"}
                />
        </>
    )
}