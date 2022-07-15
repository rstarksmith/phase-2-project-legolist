import React, { useState } from 'react'
import LegoSet from './LegoSet'

const LegoList = ({ legos, handleSetDelete, handleSearch, builtSort, boxSort }) => {
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearch(search)
        setSearch('')
    }
    
    return (
        <>
            <div className='search-container'>
                <form onSubmit={handleSubmit}>
                    <input  className='input' onChange={(e) => setSearch(e.target.value)} type="text" placeholder="🔍 Name..." value={search}></input>
                    <button className='list-button' type="submit" >Search</button>
                </form>
            </div>
            <div className='sort-container'>
                <label className='sort'>Sort by: </label>
                <button onClick={builtSort} className='sort-bttn'>Built</button>
                <button onClick={boxSort} className='sort-bttn'>In Box</button>
            </div>    
            <div className='card-container'>
                {legos.map((lego) => (<LegoSet key={lego.id} lego={lego} handleSetDelete={handleSetDelete}/>))}
            </div>
        </>  
    )
}

export default LegoList