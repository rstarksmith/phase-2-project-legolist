import React, { useState } from 'react'
import LegoSetDetails from './LegoSetDetails'

const LegoSet = ({ lego, handleSetDelete }) => {
    const [showDetails, setShowDetails] = useState(false)

    const handleDetails = () => {
        setShowDetails(!showDetails)
    }

    const handleDelete = () => {
        fetch(`http://localhost:3001/sets/${lego.id}`, {
            method: 'DELETE'
        })
        .then(resp => resp.json())
        .then(data => handleSetDelete(lego.id))
    }

    return (
        <div className="card">
            <img className="card-img" src={lego.image} alt="Lego Set" /> 
            <div className="container">
                <h3>{lego.name}</h3>
                {showDetails ? <LegoSetDetails lego={lego}/> : null}<br/>
                <button className='details-bttn' onClick={handleDetails} >＋ Details</button>
                <button className='trash-bttn' onClick={handleDelete}>X Delete</button>
            </div>
        </div>
    )
}

export default LegoSet
