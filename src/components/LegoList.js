import React from 'react'
import LegoSet from './LegoSet'

const LegoList = (
    { 
        legos, 
        handleSetDelete, 
        builtSort, 
        boxSort, 
        search, 
        onSearchChange 
    }) => {

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
            <div className='sort-container'>
                <label className='sort'>Sort by: </label>
                <button onClick={builtSort} className='sort-bttn'>Built</button>
                <button onClick={boxSort} className='sort-bttn'>In Box</button>
            </div>    
            <div className='card-container'>
                {legos.map((lego) => (
                    <LegoSet key={lego.id} lego={lego} handleSetDelete={handleSetDelete}/>
                ))}
            </div>
        </>  
    )
}

export default LegoList