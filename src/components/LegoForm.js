import React, { useState } from 'react'



const LegoForm = ( { legos }) => {
  const [name, setName] = useState('')
  const [image, setImage] = useState('')
  const [theme, setTheme] = useState('')
  const [pieces, setPieces] = useState(0)
  const [built, setBuilt] = useState(false)

  const handleNewSet = (e) => {
    e.preventDefault()
    const legoData =  { 
      name, 
      theme, 
      image, 
      pieces: parseInt(pieces), 
      built 
    }
    console.log('in function', legoData)
    fetch('http://localhost:3001/sets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(legoData),
    })
    .then(resp => resp.json())
    .then(resp => console.log('resp', resp))
  }

    return (
    <div>
        <img src='http://atlas-content-cdn.pixelsquid.com/stock-images/lego-man-people-QJD6KQA-600.jpg' alt='Lego character' />
        <br/>
          <form onSubmit={handleNewSet}>
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} placeholder="Name" /><br/><br/>
            <input type="text" onChange={(e) => setImage(e.target.value)}value={image} placeholder="Image URL" /><br/><br/>
            <input type="text" onChange={(e) => setTheme(e.target.value)}value={theme} placeholder="Theme" /><br/><br/>
            <input type="number" onChange={(e) => setPieces(e.target.value)}value={pieces} placeholder="# of Pieces" /><br/><br/>
            <input type="checkbox" onChange={(e) => setBuilt(e.target.checked)}value={built}/>
            <label htmlFor="built">Built</label><br/><br/>
            <button type="submit">Add Set</button>
          </form>
    </div>
    )
}

export default LegoForm