import './App.css';
import Homepage from './Homepage';
import SignInSide from './SignIn';
import SignUp from './SignUp';
import MyBooking from './MyBooking';
import Reward from './Reward';
import AdminHome from './AdminHome';
import AdminMember from './AdminMember';
import AdminReward from './AdminReward';

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
          <Route path="/booking"><MyBooking/></Route>
          <Route path="/reward"><Reward/></Route>
          <Route exact path="/admin"><AdminHome/></Route>
          <Route path="/admin/member"><AdminMember/></Route>
          <Route path="/admin/reward"><AdminReward/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
