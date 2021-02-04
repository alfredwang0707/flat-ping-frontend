
import './App.css';
import NavBar from './components/pages/NavBar'
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import QueryForm from './components/QueryForm';
import QueryList from './components/QueryList'

function App() {
  return ( 
   <Router>
    <NavBar/>
    <Switch>
      <Route path ='/' component={QueryForm}>
        <QueryForm/>
      </Route>
      <Route path ='/QueryList' component={QueryList}>
        <QueryList/>
      </Route>
      
    </Switch>
   </Router>
      
  
  );
}

export default App;
