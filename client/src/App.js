import React from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Search from "./pages/Search"
import Saved from "./pages/Saved";
import NoMatch from "./pages/NoMatch";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Header />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path="/books">
            <Saved />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
