import {TravelExplore} from '@mui/icons-material'
import React from 'react'
import './Navbar.css'
function Navbar() {
  return (
    <div className="navbar">
    <nav>
    <TravelExplore className="travel" />
    <p>My Travel Journal</p>
      </nav>
</div>
  )
}

export default Navbar