// import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/HelloWorld';

const name = 'Gabi';
const newName = name.toUpperCase();

function sum(a,b) {
  return a + b;
};

const url = 'https://via.placeholder.com/150';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h1>Olá</h1>
      <h2>teste</h2>
      <p>Olá, {newName}</p>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt="Minha imagem"/>
      <HelloWorld/>
    </div>
  );
}

export default App;
