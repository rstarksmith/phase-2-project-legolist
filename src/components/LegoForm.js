import React from 'react'
import { Button } from '@material-ui/core';

const LegoForm = () => {
    return (
    <div>
        <h2>New Lego Set</h2>
        <Button>Add New Set</Button>
      {/* <form>
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="image" placeholder="Image URL" />
        <input type="number" name="theme" placeholder="Theme" />
        <input type="number" name="pieces" placeholder="# of Pieces" />
        <button type="submit">Add Set</button>
      </form> */}
    </div>
    )
}

export default LegoForm