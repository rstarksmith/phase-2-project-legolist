import React from "react"
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import LegoList from "./LegoList";
import LegoForm from "./LegoForm";


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sets">
          <LegoList />
        </Route>
        <Route exact path="/sets/new">
          <LegoForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
