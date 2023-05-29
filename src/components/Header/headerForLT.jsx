import classes from './headerForLT.module.css'
import logo from '../../assets/images/big-logo.png'
import { NavLink } from 'react-router-dom'

const HeaderForLT = () => {
    return (
        <header className={classes.header}>
            <div className={classes.redLine}></div>

            <NavLink to='/cool-site-for-sasha'><img src={logo} /></NavLink>

            <div className={classes.vigets}>
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
            </div>
        </header>
    )
}

export default HeaderForLT