import React, { useState } from 'react'
import LegoSet from './LegoSet'

const LegoList = ({ legos, handleSetDelete, handleSearch }) => {
    const [search, setSearch] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        handleSearch(search)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input onChange={(e) => setSearch(e.target.value)} type="search" id="search" placeholder="🔍 Search..." value={search}></input>
                {/* <button type="submit" >🔍</button> */}
            </form>
            <div>
                {legos.map((lego) => (<LegoSet key={lego.id} lego={lego} handleSetDelete={handleSetDelete}/>))}
            </div>
        </>  
    )
}

export default LegoList