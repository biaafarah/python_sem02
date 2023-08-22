import taylor from './img/taylor.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Minha primeira imagem</h1>
          <img src={taylor} alt="Taylor Swift" className='img_taylor'/>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          aprendendo react 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
