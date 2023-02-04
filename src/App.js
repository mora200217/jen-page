import './App.css';
import { Button } from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';
import { declinedCallback, acceptedCallback } from './callbacks';
import { useEffect } from 'react';
import { Splash } from './components/Splash';



function App() {
  useEffect(()=>{
    
  }, [])
  return (
    <div className="App">
      
        <div className='d-flex flex-column container center justify-content-center'>
          <div className='mb-4'>
          <h1> ¿Quieres ir a un <strong>Museo</strong>? </h1>
          <h6> PD: Conmigo <strong>:v</strong> </h6>
        </div>
        {/* Buttons  */}
        <div>
          <Button name = "Sí. Obviamente" color = 'dark' callback={acceptedCallback}/>
          <Button name = "Nel madafaka" color = 'light' callback={declinedCallback}/>
        </div>
        </div>

        <div id="emitter"></div>

        <Footer/> 
        <Splash/>
    </div>
  );
}

export default App;
