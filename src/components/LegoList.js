import React, { useState } from 'react'
import LegoSet from './LegoSet'

const LegoList = ({ legos, handleSetDelete, search, onSearchChange }) => {
    const [filterBy, setFilterBy] = useState([])

    const legosToDisplay = legos.filter((lego) => {
        if(filterBy === "Built") {
            return lego.built === true
        } else if(filterBy === "Box") {
            return lego.built === false
        } else {
            return legos
        }
    })

    const renderLegos = legosToDisplay.map((lego) => (
        <LegoSet key={lego.id} lego={lego} handleSetDelete={handleSetDelete}/>
    ))
    
    const handleFilter = (e) => { 
        setFilterBy(e.target.value)
    }

    return (
        <>
            <div className='search-container'>
                <label htmlFor='search'>Search Sets: </label>
                <input  
                    className='input' 
                    id="search"
                    onChange={(e) => onSearchChange(e.target.value)} 
                    placeholder="🔍 Name.." 
                    type="text" 
                    value={search}
                />
            </div>
            <div className='filter-container'>
                <select name="filter" onChange={handleFilter}>
                    <option value="All">All Sets</option>
                    <option value="Built">Built</option>
                    <option value="Box">In Box</option>
                </select>
            </div>    
            <div className='card-container'>
                {renderLegos}
            </div>
        </>  
    )
}

export default LegoList