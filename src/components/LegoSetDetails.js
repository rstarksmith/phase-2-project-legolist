import React from 'react'

const LegoSetDetails = ({ lego }) => {
    return (
        <div>
            <p><strong>Theme:</strong> {lego.theme}</p>
            <p><strong>Pieces:</strong> {lego.pieces} </p>
            {/* <p>{built ? "" : ""}</p> */}
        </div>
    )
}

export default LegoSetDetails