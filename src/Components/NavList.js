import React from 'react'

function NavList() {
    return (
        <div>
            <nav className="nav" >
                    <ul>
                        <li><a href="">How we work</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Account</a></li>
                        <li><a href=""><button className="navbar-button">View Plans</button></a></li>
                    </ul>
                </nav>
        </div>
    )
}

export default NavList
