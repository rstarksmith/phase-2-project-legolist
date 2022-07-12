import React, { useState } from "react"
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import LegoList from "./LegoList";
import LegoForm from "./LegoForm";


function App() {
  const [page, setPage] = useState('/')

  const handlePageClick = (e, page) => {
    setPage(page)
  }

  return (
    <div>
      <NavBar handlePageClick={handlePageClick} />
      <Switch>
        <Route path="/sets/new">
          <LegoForm />
        </Route>
        <Route path="/sets">
          <LegoList />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
