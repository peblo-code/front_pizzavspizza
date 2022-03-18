import logo from './logo_pizza.png';
import './App.css';
import PizzeriasList from './components/PizzeriasList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          La Aplicación para los amantes de la Pizza!!
        </p>
        <h1>Pizza Vs Pizza</h1>
        <PizzeriasList/>
      </header>
    </div>
  );
}

export default App;
