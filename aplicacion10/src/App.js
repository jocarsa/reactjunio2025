import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Sobremi from './componentes/Sobremi';
import Blog from './componentes/Blog';

function App() {
  return (
    <div className="App">
      <Router>
      	<Link to="/">Inicio</Link>
      	<Link to="/sobremi">Sobre mi</Link>
      	<Link to="/blog">Blog</Link>
      	
      	<Routes>
      		<Route path="/" element={<Inicio />} />
      		<Route path="/sobremi" element={<Sobremi />} />
      		<Route path="/blog" element={<Blog />} />
      	</Routes>
      </Router>
    </div>
  );
}

export default App;
