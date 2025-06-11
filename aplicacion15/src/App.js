import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './Inicio';
import Sobremi from './Sobremi';
import Blog from './Blog';
import Contacto from './Contacto';
import Cabecera from './componentes/Cabecera.js'
import Piedepagina from './componentes/Piedepagina.js'

function App() {
  return (
    <div className="App">
    	<Cabecera/>
      <Router>
      	<Link to="/">Inicio</Link>
      	<Link to="/sobremi">Sobre mi</Link>
      	<Link to="/blog">Blog</Link>
      	<Link to="/contacto">Contacto</Link>
      	
      	<Routes>
      		<Route path="/" element={<Inicio />} />
      		<Route path="/sobremi" element={<Sobremi />} />
      		<Route path="/blog" element={<Blog />} />
      		<Route path="/contacto" element={<Contacto />} />
      	</Routes>
      </Router>
      
      <Piedepagina/>
    </div>
  );
}

export default App;
