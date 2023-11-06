import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
      <div className='header-section'>
        <div className='collapse'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link className='nav-link' to='/'>
                useRef
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/about'>
                useReducer
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/categories'>
                HOC
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/blog'>
                Create List
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contact'>
                Control Form
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/lazyloading'>
                Lazy loading
              </Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/contextapi'>
                Context API
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default NavBar
