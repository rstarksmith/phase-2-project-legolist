import React from 'react'



const LegoForm = () => {
    return (
    <div>
        <img src='http://atlas-content-cdn.pixelsquid.com/stock-images/lego-man-people-QJD6KQA-600.jpg' alt='Lego character' />
        <br/>
          <form>
            <input type="text" name="name" placeholder="Name" /><br/>
            <input type="text" name="image" placeholder="Image URL" /><br/>
            <input type="text" name="theme" placeholder="Theme" /><br/>
            <input type="number" name="pieces" placeholder="# of Pieces" /><br/>
            <input type="checkbox" name="built" value="built"/>
            <label htmlFor="built">Built</label><br/>
            <button type="submit">Add Set</button>
          </form>
    </div>
    )
}

export default LegoForm