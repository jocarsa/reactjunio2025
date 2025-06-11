import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';

function App() {
  const [articulos, setArticulos] = useState(null);

  useEffect(() => {
    fetch("https://static.jocarsa.com/json/blog.json")
    .then(res => res.json())
    .then(datos => {
      setArticulos(datos);
    })
    .catch(()=>{
    	console.log("Ha ocurrido un error")
    });
  }, []); 

  return (
    <div className="contenedor">
    	<h1>El blog de Jose Vicente</h1>
    	{}
    	{articulos ? (
            <>
                {articulos.map((articulo,indice) => (
					<article key={indice}>
						<h4>{articulo.titulo}</h4>
						<time>{articulo.fecha}</time>
						<p>{articulo.autor}</p>
						<p>{articulo.contenido}</p>
					</article>
					))}
            </>
        ) : (
            <p>Cargando...</p> 
        )}
        

    </div>
  );
}

export default App;
