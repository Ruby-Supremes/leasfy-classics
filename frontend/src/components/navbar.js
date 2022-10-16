import React from 'react'
import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <div class="navbar-header">
        <div class="sticky-top nav-header">
            <Link to="/" class="nav-header-link">Home</Link>
            <Link to="/showroom" class="nav-header-link">Show Room</Link>
            <Link to="/signup" class="nav-header-link">Create account</Link>
            <Link to="/login" class="nav-header-link"> login</Link>
        </div>
    </div>
  )
}

export default NavBar;
