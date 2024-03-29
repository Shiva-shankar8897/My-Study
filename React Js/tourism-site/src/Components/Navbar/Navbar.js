import React, { useState } from 'react'
import './Navbar.css'
import { SiYourtraveldottv } from 'react-icons/si'
import { AiFillCloseCircle } from 'react-icons/ai'
import { TbGridDots } from 'react-icons/tb'

function Navbar() {
  //code to toggle navbar
  const [active, setActive] = useState('navBar')
  const showNav = () => {
    setActive('navBar activeNavbar')
  }
  // code to remove toggle navabar
  const removeNav = () => {
    setActive('navBar')
  }
  return (
    <div>
      <section className='navBarSection'>
        <div className='header'>

          <div className='logodiv'>
            <a href='#' className='logo'>
              <h1 className='flex'><SiYourtraveldottv className='icon' />
                Shanku</h1>
            </a>
          </div>
          <div className={active}>
            <ul className='navLists flex'>
              <li className='navItem'>
                <a href='#' className='navLink'>Home</a>
              </li>
              <li className='navItem'>
                <a href='#' className='navLink'>Products</a>
              </li>
              <li className='navItem'>
                <a href='#' className='navLink'>Resources</a>
              </li>
              <li className='navItem'>
                <a href='#' className='navLink'>Contact</a>
              </li>
              <li className='navItem'>
                <a href='#' className='navLink'>Blog</a>
              </li>
              <div className='headerBtns flex'>
                <button className='btn loginBtn'>
                  <a href='#'>Login</a>
                </button>
                <button className='btn'>
                  <a href='#'>Sign Up</a>
                </button>
              </div>
            </ul>
            <div onClick={removeNav} className='closeNavbar'>
              <AiFillCloseCircle className='icon' />
            </div>
          </div>
          <div onClick={showNav} className='toggleNavbar'>
            <TbGridDots className='icon' />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Navbar
