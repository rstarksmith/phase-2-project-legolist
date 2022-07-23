import React, { useState, useEffect } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

  // const builtFilter = () => {
  //   const builtArray = legos.filter(lego => lego.built === true)
  // }

  // const boxFilter = () => {
  //   const boxArray = legos.filter(lego => lego.built === false)
  // }

  const reRenderSet = () => {
    setSearch('')
  }

  return (
    <Router>
      <NavBar reRenderSet={reRenderSet} />
      <Switch>
        <Route path="/sets/new">
          <LegoForm 
            handleAddSet={handleAddSet} 
            reRenderSet={reRenderSet} 
          />
        </Route>
        <Route path="/sets">
          <LegoList 
            legos={displayedLegos} 
            handleSetDelete={handleSetDelete} 
            // builtFilter={builtFilter} 
            // boxFilter={boxFilter}
            search={search}
            onSearchChange={setSearch}
          />
        </Route>
        <Route exact path="/">
          <Home reRenderSet={reRenderSet} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
