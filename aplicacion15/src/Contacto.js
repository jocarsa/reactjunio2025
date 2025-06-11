import React, { useState } from 'react';
import './Contacto.css';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [errores, setErrores] = useState({});


  const validarFormulario = () => {
    let errores = {};
    if (!nombre.trim()) {
      errores.name = 'El nombre es requerido';
    }
    if (!correo.trim()) {
      errores.correo = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(correo)) {
      errores.correo = 'El formato del email no es válido';
    }
    setErrores(errores);
    return Object.keys(errores).length === 0;
  };


  const procesaEnvio = (e) => {
    e.preventDefault();  // Impide la acción por defecto
    if (validarFormulario()) {
      console.log('Formulario enviado:', { nombre, correo });
      // Aquí podrías enviar los datos a un servidor
      setNombre('');
      setCorreo('');
      setErrores({});
    } else {
      console.log('Errores en el formulario');
    }
  };
  return (
  <>
  <h2>Contacto</h2>
    <form onSubmit={procesaEnvio}>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="name"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        {errores.name && <p style={{ color: 'red' }}>{errores.name}</p>}
      </div>
      <div>
        <label htmlFor="correo">Email:</label>
        <input
          type="email"
          id="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
        />
        {errores.email && <p style={{ color: 'red' }}>{errores.email}</p>}
      </div>
      <button type="submit">Enviar</button>
    </form>
    </>
  );

}

export default Contacto;
