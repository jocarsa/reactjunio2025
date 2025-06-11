import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

function App() {
const [contador, setContador] = useState(0);
  return (
    <div className="App">
      <p>Contador: {contador}</p>
     <button onClick={()=>setContador(contador+1)}>Pulsa para incrementar</button>
    </div>
  );
}

export default App;
