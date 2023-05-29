import classes from './basketball.module.css'

const Basketball = () => {
    return (
        <div className={classes.basketballNews}>
            <div className={classes.inputShell}>
                <input type="text" placeholder='Пошук' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/shkoliari-1.jpg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>«Черкаси» фінішували у трійці призерів Всеукраїнської Гімназіади з баскетболу 3х3</b>
                    <span><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</span>
                    <p>В столичному спортивному комплексі «Венето-Спорт» відбулась Всеукраїнська Гімназіада з баскетболу 3х3....</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/5-tur.png" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>Черкаський тур Кубку України з баскетболу 3х3 буде присвячений пам’яті Олега Прудкого</b>
                    <span><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</span>
                    <p>П’ятий тур Кубку України та етапи чемпіонатів України U-18 та U-23 ...</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/img_1858_1684395095.jpg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>Черкаські баскетболісти вийшли до «Фіналу 4-ох» ВЮБЛ серед юнаків 2006 р.н.</b>
                    <span><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</span>
                    <p>У Черкасах зіграні матчі другого туру II етапу Чемпіонату України ВЮБЛ серед юнаків 2006 року народження....</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/04/basket-ukr-9331.jpg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>Визначилися переможці і призери Чемпіонату Черкащини з баскетболу 3х3 серед учнів</b>
                    <span><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</span>
                    <p>Відбувся чемпіонат Черкаської області з баскетболу 3х3 (фінал) серед учнів...</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/04/24042023.jpg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>Баскетболістка «Венето-Черкаси» Марія Пугач встановила рекорд сезону</b>
                    <span><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</span>
                    <p>Досягнення гравчині баскетбольної команди з Черкас,
                         яка сезон 2022/2023 років провела у жіночій Суперлізі України увійшло в історію  ...</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>
        </div>
    )
}

export default Basketball