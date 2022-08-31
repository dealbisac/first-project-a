import './App.css';
import City from './components/City';

function App() {
  return (
    <div className="App">
      <City city="London" feature="beautiful"/>
      <City city="Kathmandu" feature="awesome"/>
      <City city="Beijing" feature="great"/>
      <City city="Delhi" feature="marvelous"/>

      {/* <p>Hello, I am in London. It is beautiful.</p>
      <p>Hello, I am in Kathmandu. It is awesome.</p>
      <p>Hello, I am in Beijing. It is great.</p>
      <p>Hello, I am in Delhi. It is marvelous.</p> */}
    </div>
  );
}

export default App;
