import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [ciudad, setCiudad] = useState(null); // Initialize with null

  useEffect(() => {
    fetch("https://www.el-tiempo.net/api/json/v2/home")
    .then(res => res.json())
    .then(datos => {
      setCiudad(datos);
      console.log(datos);
    })
    .catch(()=>{
    	console.log("Ha ocurrido un error")
    });
  }, []); 

  return (
    <div>
        {}
        {ciudad ? (
            <>
                <h3>{ciudad.ciudades[3].name}</h3>
                <p>{ciudad.ciudades[3].stateSky.description}</p>
                <p>Temperatura máxima: {ciudad.ciudades[3].temperatures.max}</p>
                <p>Temperatura mínima: {ciudad.ciudades[3].temperatures.min}</p>
            </>
        ) : (
            <p>Cargando...</p> 
        )}
    </div>
  );
}

export default App;
