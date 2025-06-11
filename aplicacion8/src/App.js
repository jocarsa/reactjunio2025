import logo from './logo.svg';
import './App.css';

function App() {
	const clientes = [
		'José Vicente Carratalá',
		'Juan Martinez Lopez',
		'Jaime Garcia Martinez'
	]
  return (
    <div className="App">
      <p>Listado de clientes</p>
      {clientes.map((cliente,indice) => (
      	<li>Cliente número {indice}: {cliente}</li>
      ))}
    </div>
  );
}

export default App;
