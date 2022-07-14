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
        .then(handleSetDelete(lego.id))
    }

    return (
        <div className="card">
            <img className="card-img" src={lego.image} alt="Lego Set" /> 
            <div className="container">
                <h3>{lego.name}</h3><br/>
                {showDetails ? <LegoSetDetails lego={lego}/> : null}<br/>
                <button onClick={handleDetails} >＋ More Details</button>
                <button onClick={handleDelete}>🗑 Delete</button>
            </div>
        </div>
    )
}

export default LegoSet
