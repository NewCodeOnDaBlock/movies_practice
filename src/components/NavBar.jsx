import React from 'react'

const NavBar = () => {
  return (
    <div className='nav-bar-container'>
      <div className='left-side-container'>
        <h2>
          Movies That Made Us
        </h2>
      </div>
        <div className='right-side-container'>
        <input type="text" />
          <ul>
            <li>Home</li>
            <li>Upcoming Movies</li>
            <li>Popular</li>
          </ul>
        </div>
    </div>
  )
}

export default NavBar
