import logo from './logo.svg';
import './App.css';
import Birthdaylist from './Components/Birthdaylist';
import data from './Components/data';

function App() {
  return (
    <div className="App">
      <h1 style={{fontFamily:"sans-serif",color:"darkorchid"}}>There are {data.length} birthdays.</h1>
      <Birthdaylist/>
    </div>
  );
}

export default App;
