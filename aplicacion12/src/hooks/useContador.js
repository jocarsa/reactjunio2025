import { useState } from 'react';

function useContador(inicio = 0) {
  const [cuenta, setCuenta] = useState(inicio);

  const incrementa = () => {
    setCuenta(cuentaPrevia => cuentaPrevia + 1);
  };

  const decrementa = () => {
    setCuenta(cuentaPrevia => cuentaPrevia - 1);
  };

  const reinicia = () => {
    setCuenta(inicio);
  };

  return {
    cuenta,
    incrementa,
    decrementa,
    reinicia,
  };
}

export default useContador;
