import logo from './logo.svg';
import './App.css';

function App() {
	const edad = 47;
  return (
    <div className="App">
      {edad > 30 && <p>Ya no eres joven</p>}
    </div>
  );
}

export default App;
