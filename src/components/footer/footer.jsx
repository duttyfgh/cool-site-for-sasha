
import classes from './footer.module.css'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <p>Інформаційний портал "Дитячий спорт Черкас",</p>
            <span>© 2023 всі права захищені <a href="https://creativecommons.org/licenses/by/4.0/deed.uk">Creative Commons BY 4.0</a>
            </span>
            <div className={classes.line}></div>
            <div className={classes.autorSite}>Цей сайт створено <a href="https://www.instagram.com/dutyfgh/">
                <i className={["fa-brands fa-instagram"]}></i></a></div>
        </footer>
    )
}

export default Footer