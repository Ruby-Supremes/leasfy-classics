import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
  return (
    <div class="navbar">
        <div class="sticky-top nav-header">
            <Link to="/" class="nav-header-link">Home</Link>
            <Link to="/showroom" class="nav-header-link">Show Room</Link>
            {/* <Link to="/account" class="nav-header-link">Account</Link> */}
        </div>
    </div>
  )
}

export default Header
