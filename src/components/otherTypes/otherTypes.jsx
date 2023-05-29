import classes from './outherTypes.module.css'

const OutherTypes = () => {
    return (
        <div className={classes.outherTypesNews}>
            <div className={classes.inputShell}>
                <input type="text" placeholder='Пошук' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/borotba.jpg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>У Чемпіонаті Черкас з вільної боротьби змагатимуться представники 4-ох регіонів України</b>
                    <span><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</span>
                    <p>29 травня у Черкасах відбудеться відкритий чемпіонат міста з вільної
                         боротьби серед юнаків та дівчат 2010-2012 р.н. та 2013-2014...</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/img_20230524_145724-1.jpg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>У Черкасах відбувся відкритий чемпіонат міста зі спортивної акробатики</b>
                    <span><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</span>
                    <p>За нагороди змагалися вихованці комплексної дитячо-юнацької спортивної школи...</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/trek.jpg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>Вихованці КДЮСШ №2 взяли участь у чемпіонаті України з велосипедного спорту (трек)</b>
                    <span><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</span>
                    <p>У Львові за нагороди Чемпіонату України змагалася молодь до 23-х років, юніорів та юніорок...</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/luk.jpg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>Визначилися переможці і призери Чемпіонаті Черкаської області зі стрільби з лука</b>
                    <span><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</span>
                    <p>У змаганнях взяли участь спортсмени з Черкас, Золотоніщини, Христинівки....</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/kubok-svitu.jpg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>Черкащанин Іван Ткаченко виборов «срібло» Кубку світу з кікбоксингу WAKO</b>
                    <span><i className={['fa-solid fa-clock']}></i> 25 травня, 2023</span>
                    <p>У Стамбулі (Туреччина) відбулися змагання за Кубок світу з кікбоксингу WAKO...</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>
        </div>
    )
}

export default OutherTypes