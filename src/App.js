import './App.css';
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Hello/>
      <Hello name="Dipendra" />
      <Hello name="Milan"/>
    </div>
  );
}

export default App;
