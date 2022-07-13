import React from 'react'
import LegoSet from './LegoSet'

const LegoList = ({ legos }) => {
    return (
        <div>
            {legos.map((lego) => (<LegoSet key={lego.id} lego={lego} />))}
        </div>
    )
}

export default LegoList