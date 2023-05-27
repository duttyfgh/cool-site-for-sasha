import { useNavigate } from 'react-router'
import classes from './newsForMainPage.module.css'

const NewsForMainPage = () => {

    const navigate = useNavigate();

    const renavigate = () => {
        navigate('/news');
    };

    return (
        <div className={classes.actualNews}>
            <div className={classes.newsLine}>НОВИНИ</div>
            <div className={classes.lastActualNews}>
                <img src="https://cherkassy-sport.com/wp-content/uploads/2019/11/1913102017__m.jpg" alt="..." />
                <div className={classes.textBlock}>
                    <b>Результати 5 туру</b>
                    <span><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</span>
                    <p>Матчі чергового туру Чемпіонату Черкаської області з футболу DEFENDA-ЛІГА відбулися 27 травня 5 тур<br />
                        (27.05.2023) Група «А» ФК «Златокрай-2017»...</p>
                    <button onClick={renavigate} className={classes.readMore}>Читати більше..</button>
                </div>
            </div>

            <div className={classes.otherNews}>

                <div className={classes.newsItem}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/lnz.jpg" alt="..." />
                    <div className={classes.newsDesacitpion}>
                        <b>Підсумкова турнірна таблиця Чемпіонату України з футболу (I ліга, група «Чемпіонська»)</b>
                        <p><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</p>
                    </div>
                </div>

                <div className={classes.newsItem}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2022/11/video-hry8.jpg" alt="..." />
                    <div className={classes.newsDesacitpion}>
                        <b>Відео гри: Чемпіонат України з футболу. I ліга. «Полісся» – ФК «ЛНЗ» – 2:1</b>
                        <p><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</p>
                    </div>
                </div>

                <div className={classes.newsItem}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/1685012484151021-1024x610.jpg" alt="..." />
                    <div className={classes.newsDesacitpion}>
                        <b>Доненко: На Чемпіонаті Європи головне не підвести наші ЗСУ, які відвойовують мир для України</b>
                        <p><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</p>
                    </div>
                </div>

                <div className={classes.newsItem}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/dovbyk-i-mykolenko-.jpeg" alt="..." />
                    <div className={classes.newsDesacitpion}>
                        <b>Довбик і Миколенко у списку національної збірної команди України на червневі матчі</b>
                        <p><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</p>
                    </div>
                </div>
                <div className={classes.newsItem}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/borotba.jpg" alt="..." />
                    <div className={classes.newsDesacitpion}>
                        <b>У Чемпіонаті Черкас з вільної боротьби змагатимуться представники 4-ох регіонів України</b>
                        <p><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</p>
                    </div>
                </div>

                <div className={classes.newsItem}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2022/11/priama.jpg" alt="..." />
                    <div className={classes.newsDesacitpion}>
                        <b>Відео гри Чемпіонату Черкащини з футболу «Карбон» – «Профіспорт»</b>
                        <p><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</p>
                    </div>
                </div>

                <div className={classes.newsItem}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2022/11/kamera-futzal.jpg" alt="..." />
                    <div className={classes.newsDesacitpion}>
                        <b>Гра Екстра-ліги України з футзалу «ХІТ» – «Ураган» – 2:0</b>
                        <p><i className={['fa-solid fa-clock']}></i> 26 травня, 2023</p>
                    </div>
                </div>

                <div className={classes.newsItem}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/img_20230524_145724-1.jpg" alt="..." />
                    <div className={classes.newsDesacitpion}>
                        <b>У Черкасах відбувся відкритий чемпіонат міста зі спортивної акробатики</b>
                        <p><i className={['fa-solid fa-clock']}></i> 26 травня, 2023</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewsForMainPage