import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signin from "../Pages/SigninPage";
import Signup from "../Pages/SignupPage";
import Timeline from "../Pages/Timeline";

const RoutePath = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/timeline" component={Timeline} />
      </Switch>
    </Router>
  );
};

export default RoutePath;
