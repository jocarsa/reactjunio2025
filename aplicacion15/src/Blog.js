import React, {useEffect, useState} from 'react';

function Blog() {
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
    <h2>Blog</h2>

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

export default Blog;
