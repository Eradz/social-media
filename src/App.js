import './App.css';
import { Login } from './components/Login/Login';
import { Signup } from './components/Signup/Signup';
import { Main } from './components/Main/Main';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
 
  return (
    <Router>
        <div className="App">
            <Switch>
              <Route exact path="/"> <Login/></Route>
              <Route exact path="/signup"><Signup/></Route>
              <Route exact path="/home"><Main/></Route>
            </Switch>
        </div>
    </Router>
  );
}

export default App;
