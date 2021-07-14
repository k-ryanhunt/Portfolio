import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from "./components/wrapper/wrapper.js";
import Header from "./components/navbar/navbar.js";
import badge from "./components/badge/badge.js";

function App() {
  return (
    <Router>
      <Header />
      <Wrapper>
        <Switch>
          <Route exact path="/badge" component={badge} />
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
