import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages';
//Just a more complecated way of creating a website

function App() {
  return (
    //The code that you what to be displayed in the front end
    <Router>
      <Home/>
    </Router>
  );
}

export default App;
