import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import LegoList from "./LegoList";
import LegoForm from "./LegoForm";


const App = () => {
  const [legos, setLegos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/sets')
    .then(resp => resp.json())
    .then(resp => setLegos(resp))
  }, [])


  const handleSetDelete = (id) => {
    const updatedLegos = legos.filter(lego => lego.id !== id)
    setLegos(updatedLegos)
  }

  const handleAddSet = (newSet) => {
    setLegos([...legos, newSet])
  }


  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/sets/new">
          <LegoForm handleAddSet={handleAddSet} />
        </Route>
        <Route path="/sets">
          <LegoList legos={legos} handleSetDelete={handleSetDelete}/>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
