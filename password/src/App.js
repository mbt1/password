import logo from './logo.svg';
import './App.css';
import MainForm from './MainForm.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <img src={logo} className="App-logo" alt="logo" />
          A Simple React-Based Password Generator
        </h1>
      </header>
      <MainForm />
    </div>
  );
}

export default App;
