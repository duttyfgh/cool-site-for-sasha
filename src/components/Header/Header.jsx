import classes from './Header.module.css'
import React, { useEffect, useState } from "react"
import { NavLink } from 'react-router-dom'
import logo from '../../assets/images/big-logo.png'
import HeaderForTablet from './headerForTablet'
import HeaderForLT from './headerForLT'

const HeaderForPC = (props) => {
  return (
    <header className={classes.header}>
      <NavLink to='/cool-site-for-sasha'><img src={logo} /></NavLink>

      <div className={classes.vigets}>
        <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/cool-site-for-sasha'}>ГОЛОВНА</NavLink>
        <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/news'}>НОВИНИ</NavLink>
        <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/footbol'}>ФУТБОЛ</NavLink>
        <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/basketbol'}>БАСКЕТБОЛ</NavLink>
        <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/outher'}>ІНШІ ВИДИ</NavLink>
        <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/videos'}>ВІДЕО</NavLink>
        <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/about-as'}>ПРО НАС</NavLink>
        <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/contacts'}>КОНТАКТИ</NavLink>
      </div>
    </header>
  )
}

const Header = (props) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  let headerComponent

  switch (true) {
    case screenWidth > 1600:
      headerComponent = <HeaderForPC />
      break
    case screenWidth > 1049:
      headerComponent = <HeaderForLT />
      break
    default:
      headerComponent = <HeaderForTablet />
      break
  }

  return (
    <div>
      {headerComponent}
    </div>
  )
}

export default Header