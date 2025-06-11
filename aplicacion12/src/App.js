import logo from './logo.svg';
import './App.css';
import useContador from './hooks/useContador';

function App() {
	const { cuenta, incrementa, decrementa, reinicia } = useContador(10);
  return (
    <div className="App">
      <h1>Contador: {cuenta}</h1>
      <button onClick={incrementa}>Incrementar</button>
      <button onClick={decrementa}>Decrementar</button>
      <button onClick={reinicia}>Reiniciar</button>
       
    </div>
  );
}

export default App;
