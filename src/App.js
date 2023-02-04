import logo from './logo.svg';

import './App.css';
import { Button } from './components/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './components/Footer';


function App() {
  return (
    <div className="App">
        <div className='d-flex flex-column container center justify-content-center'>
          <div className='mb-4'>
          <h1> ¿Quieres ir a un <strong>Museo</strong>? </h1>
          <h6> PD: Conmigo <strong>:v</strong> </h6>
        </div>
        {/* Buttons  */}
        <div>
          <Button name = "Sí. Obviamente" color = 'dark'/>
          <Button name = "Nel madafaka" color = 'light' />
        </div>
        </div>

        <Footer/> 
    </div>
  );
}

export default App;
