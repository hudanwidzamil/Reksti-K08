import './App.css';
import Homepage from './Homepage';
import SignInSide from './SignIn';
import SignUp from './SignUp';
import MyBooking from './MyBooking';
import Reward from './Reward';
import AdminHome from './AdminHome';
import AdminMember from './AdminMember';
import AdminReward from './AdminReward';
import AdminLapangan from './AdminLapangan';
import AdminManage from './AdminManage';
import withPageView from './withPageView';

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
          <Route exact path="/" component={withPageView(Homepage)}/>
          <Route path="/login"component={withPageView(SignInSide)}/>
          <Route path="/register"component={withPageView(SignUp)}/>
          <Route path="/booking"component={withPageView(MyBooking)}/>
          <Route path="/reward"component={withPageView(Reward)}/>
          <Route exact path="/admin"><AdminHome/></Route>
          <Route path="/admin/member"><AdminMember/></Route>
          <Route path="/admin/reward"><AdminReward/></Route>
          <Route path="/admin/lapangan"><AdminLapangan/></Route>
          <Route path="/admin/manage"><AdminManage/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
