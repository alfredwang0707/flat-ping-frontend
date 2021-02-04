
import './App.css';
import NavBar from './components/pages/NavBar'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'

function App() {
  return ( 
   <Router>
    <NavBar/>
    <Switch>
      <Route path ='/' />
    </Switch>
   </Router>
      
  
  );
}

export default App;
