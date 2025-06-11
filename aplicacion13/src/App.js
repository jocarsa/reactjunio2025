import logo from './logo.svg';
import './App.css';
import Cabecera from './componentes/Cabecera'
import Heroe from './componentes/Heroe'
import Sobremi from './componentes/Sobremi'
import Piedepagina from './componentes/Piedepagina'

function App() {
  return (
    <div className="App">
     	<Cabecera />
     	<Heroe />
     	<Sobremi />
     	<Piedepagina />
    </div>
  );
}

export default App;
