import React from 'react'


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="logo">LEGO List</div>
                <ul className="nav-links">
                    <div className="menu">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">List</a></li>
                        <li><a href="/">Add Set</a></li>
                    </div>
                </ul>
        </nav>
    )
}
export default NavBar