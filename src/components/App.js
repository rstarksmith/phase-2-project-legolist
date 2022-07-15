import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import LegoList from "./LegoList";
import LegoForm from "./LegoForm";


const App = () => {
  const [legos, setLegos] = useState([])
  const [currentLegos, setCurrentLegos] = useState([])

  useEffect(() => {
    fetch('http://localhost:3001/sets')
    .then(resp => resp.json())
    .then(resp => {
      setLegos(resp)
      setCurrentLegos(resp)
    })
  }, [])

  const handleSetDelete = (id) => {
    const updatedLegos = legos.filter(lego => lego.id !== id)
    setCurrentLegos(updatedLegos)
    setLegos(updatedLegos)
  }

  const handleAddSet = (newSet) => {
    setLegos([...legos, newSet])
    setCurrentLegos([...legos, newSet])
  }

  const handleSearch = (search) => {
    const filteredLegos = legos.filter(lego => {
      return lego.name.toLowerCase().includes(search)})
    setCurrentLegos(filteredLegos)
  }

  const reRenderSet = () => {
    setCurrentLegos(legos)
  }

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/sets/new">
          <LegoForm handleAddSet={handleAddSet} />
        </Route>
        <Route path="/sets">
          <LegoList legos={currentLegos} handleSetDelete={handleSetDelete} handleSearch={handleSearch}/>
        </Route>
        <Route exact path="/">
          <Home reRenderSet={reRenderSet} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
