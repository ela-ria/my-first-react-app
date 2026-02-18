import Mybutton from './components/Button';
import FunctionalComponent from './components/FunctionalComponent';
import './App.css';


function App() {
  return (
    <div className="App">
        <h1> My First React App</h1>
        <FunctionalComponent name = "Alice "></FunctionalComponent>
        <Mybutton onClick={() => alert('buttonclicked')}></Mybutton>
    </div>
  );
}

export default App;
