import { NavLink } from 'react-router-dom'
import classes from './pageNotFound.module.css'
import error404 from '../../assets/images/error404.png'

const PageNotFound = () => {
    return (
        <div className={classes.pageNotFound}>
            <div className={classes.imgShell}><img src={error404} alt="404 error" /></div>
            <p>Упсс.. На жаль, такої сторінки не існує.</p>
            <NavLink to={'/cool-site-for-sasha'}>Перейти на головну <i className={["fa-solid fa-house"]}></i></NavLink>
        </div>
    )
}

export default PageNotFound