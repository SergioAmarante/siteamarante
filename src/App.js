import Router from './router.js';
import {BrowserRouter} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
      <BrowserRouter> 
        <Router />
      </BrowserRouter>
  );
}

export default App;
