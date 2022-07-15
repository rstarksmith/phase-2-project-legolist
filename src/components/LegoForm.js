import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'



const LegoForm = ( { legos, handleAddSet}) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [theme, setTheme] = useState('')
  const [pieces, setPieces] = useState(0)
  const [built, setBuilt] = useState(false)

  const history = useHistory()

  const handleNewSet = (e) => {
    e.preventDefault()
    const legoData =  { 
      name, 
      theme, 
      image, 
      pieces: parseInt(pieces), 
      built 
    }
    fetch('http://localhost:3001/sets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(legoData),
    })
    .then(resp => resp.json())
    .then(newSet => {
      handleAddSet(newSet)
      setName('')
      setImage('')
      setTheme('')
      setPieces(0)
      history.push('/sets')
    })
    
  }

    return (
    <div>
        <img className='lego-image' src='https://i.imgur.com/M4Q9eKd.png' alt='Lego character' />
          <form onSubmit={handleNewSet}>
            <input className='input' type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name..." /><br/><br/>
            <input className='input' type="text" onChange={(e) => setImage(e.target.value)} value={image} placeholder="Image URL..." /><br/><br/>
            <input className='input' type="text" onChange={(e) => setTheme(e.target.value)} value={theme} placeholder="Theme..." /><br/><br/>
            <input className='input' type="number" onChange={(e) => setPieces(e.target.value)} value={pieces} /><br/><br/>
            <input className='built' type="checkbox" onChange={(e) => setBuilt(e.target.checked)} value={built}/>
            <label className='built' htmlFor="built"> Built</label><br/><br/>
            <button className='home-button' type="submit">Add Set</button>
          </form>
    </div>
    )
}

export default LegoForm
