import React, { useState, useEffect } from "react"
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import LegoList from "./LegoList";
import LegoForm from "./LegoForm";


const App = () => {
  const [legos, setLegos] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    fetch('http://localhost:3001/sets')
    .then(resp => resp.json())
    .then(resp => {
      setLegos(resp)
    })
  }, [])

  const handleSetDelete = (id) => {
    const updatedLegos = legos.filter(lego => lego.id !== id)
    setLegos(updatedLegos)
  }

  const handleAddSet = (newSet) => {
    const addToLegos = [...legos, newSet]
    setLegos(addToLegos)
  }

  const displayedLegos = legos.filter((lego) => {
    return lego.name.toLowerCase().includes(search)
  })

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/sets">
          <LegoList 
            legos={displayedLegos} 
            handleSetDelete={handleSetDelete} 
            search={search}
            onSearchChange={setSearch}
          />
        </Route>
        <Route path="/sets/new">
          <LegoForm 
            handleAddSet={handleAddSet} 
            onSearchChange={setSearch} 
          />
        </Route>
      </Switch>
    </>
  )
}

export default App;
