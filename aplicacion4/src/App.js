import logo from './logo.svg';
import './App.css';
import React, {useState,useEffect} from 'react';

function App() {
  
      const [hora, setHora] = useState(new Date());
      
      useEffect(() => {
      	const id = setInterval( ()=> setHora(new Date()),1000)
      	return () => clearInterval(id)
      },[]);
   	
   	return <p>Hora actual:{hora.toLocaleTimeString()}</p>;
}

export default App;
