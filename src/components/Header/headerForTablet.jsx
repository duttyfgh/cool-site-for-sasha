import classes from './headerForTablet.module.css'
import logo from '../../assets/images/big-logo.png'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'

const HeaderForTablet = () => {
    const [dropPonelIsActive, setDropPonelIsActive] = useState(false)

    const activeteDropPonel = () => {
        setDropPonelIsActive(true)
    }
    const unActiveteDropPonel = () => {
        setDropPonelIsActive(false)
    }

    return (
        <header className={classes.header}>
            <NavLink to='/cool-site-for-sasha'><img src={logo} /></NavLink>
            {dropPonelIsActive
                ? <div className={classes.burger}><span>МЕНЮ</span>
                    <i onClick={unActiveteDropPonel} className={["fa-solid fa-xmark"]}></i></div>
                : <div className={classes.burger}><span>МЕНЮ</span>
                    <i onClick={activeteDropPonel} className={["fa-solid fa-bars"]}></i></div>
            }

            {dropPonelIsActive && <div className={classes.dropPonel}>
                <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/cool-site-for-sasha'}>
                    ГОЛОВНА
                </NavLink>

                <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/news'}>
                    НОВИНИ
                </NavLink>

                <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/footbol'}>
                    ФУТБОЛ
                </NavLink>

                <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/basketbol'}>
                    БАСКЕТБОЛ
                </NavLink>

                <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/outher'}>
                    ІНШІ ВИДИ
                </NavLink>

                <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/videos'}>
                    ВІДЕО
                </NavLink>

                <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/about-as'}>
                    ПРО НАС
                </NavLink>

                <NavLink className={navData => navData.isActive ? classes.active : classes.vigetsItem} to={'/contacts'}>
                    КОНТАКТИ
                </NavLink>
            </div>}


        </header>
    )
}

export default HeaderForTablet