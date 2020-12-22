import './App.css';
import Counter from './components/Counter/Counter';
import Todos from './components/Todos/Todos';

function App() {
  return (
    <div className="App">
      <Todos />
      <Counter />
    </div>
  );
}

export default App;
