import logo from './logo.svg';
import './App.css';
import Hotels from './Hotels';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        <Hotels />
      </section>
    </div>
  );
}

export default App;
