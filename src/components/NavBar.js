import React from 'react'
import { NavLink } from 'react-router-dom'


const NavBar = ({ reRenderSet }) => {

    return (
        <nav className="navbar" >
            <img src='https://i.imgur.com/tLdkxvn.png?1' alt='lego list logo' className="logo"/>
                <ul className="nav-links">
                    <div className="menu">
                        <NavLink exact to="/">Home</NavLink>
                        <NavLink exact to="/sets" onClick={reRenderSet}>List</NavLink>
                        <NavLink to="/sets/new">Add Set</NavLink>
                    </div>
                </ul>
        </nav>
    )
}
export default NavBar

