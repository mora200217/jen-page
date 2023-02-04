

import './Splash.css'
import { useEffect } from 'react'
import Img from './assets/brad.jpg'


export const Splash = () => {
    useEffect(()=> {
        setTimeout(()=> {
            const bar = document.getElementById('bar'); 
            console.log(bar)
            bar.style.width = "100vw"; 
        }, 1500)

        setTimeout(()=> {
            const bar = document.getElementById('splash-screen'); 
            bar.parentElement.removeChild(bar); 
        }, 3500)
    }, [])
    return(
        <div id = "splash-screen" className="splash-screen d-flex flex-column center expand align-items-center justify-content-center">
            <span id = "bar" className='loading-bar bg-dark'></span>
            <img 
                className='mb-3'
                src= {Img} 
                alt="Aquí iba una imagen de Brad Pitt." 
                srcset="" 
                style={{width: 300}}/>
            <h6> Sí. Es un splash screen con <strong>Brad Pitt</strong>.</h6>
        </div>
    )
}