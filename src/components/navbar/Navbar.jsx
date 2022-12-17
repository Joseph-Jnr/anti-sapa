import React, { useState } from 'react'
import './navbar.css'
import vector1 from '../../assets/Vector 1.svg'
import logoText from '../../assets/Anti-Sapa.svg'
import vector2 from '../../assets/Vector 2.svg'
import Button from '../UI/button/Button'
import '../UI/button/Button.css'
import { AiOutlineClose } from 'react-icons/ai'
import { RiMenu4Fill } from 'react-icons/ri'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className='flex flex-row justify-between items-center'>
      <div className='logo'>
        <a href="#home">
          <img src={vector1} alt="vector 1" />
          <img src={logoText} alt="logo text" />
          <img src={vector2} alt="vector 2" />
        </a>
      </div>
      <menu className='nav-wrap flex flex-row justify-between items-center z-50' id={showMenu ? "nav-link-mobile" : "nav-link-mobile-hide"}>
        <div className='nav-links z-50'>
          <ul className='flex flex-row'>
            <li className='single-link'>
              <a href="#save">Save</a>
            </li>
            <li className='single-link'>
              <a href="#manage">Manage</a>
            </li>
            <li className='single-link'>
              <a href="#stories">Stories</a>
            </li>
            <li className='single-link'>
              <a href="#FAQs">FAQs</a>
            </li>
            <li className='single-link'>
              <a href="#blog">Blog</a>
            </li>
          </ul>
        </div>
        <div className='nav-btns flex flex-row z-50'>
          <Button icon={''} text={'Sign in'} btnClass={'btn-outline'} href={"#signin"}/>
          <Button icon={''} text={'Create free account'} btnClass={'btn-white mx-6'} href={"#signup"}/>
        </div>
      </menu>

      <div className="menu-icon z-50" onClick={toggleMenu}>
        {
          showMenu ? <AiOutlineClose color='#fff' size={30} /> : <RiMenu4Fill color='#fff' size={30} />
        }
      </div>
      
    </nav>
  )
}

export default Navbar