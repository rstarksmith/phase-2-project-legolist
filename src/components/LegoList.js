import React from 'react'
import LegoSet from './LegoSet'

const LegoList = ({ legos, handleSetDelete }) => {
    return (
        <div>
            {legos.map((lego) => (<LegoSet key={lego.id} lego={lego} handleSetDelete={handleSetDelete}/>))}
        </div>
    )
}

export default LegoList