import './App.css';
import Homepage from './Homepage';
import SignInSide from './SignIn';
import SignUp from './SignUp';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/"><Homepage/></Route>
          <Route path="/login"><SignInSide/></Route>
          <Route path="/register"><SignUp/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
