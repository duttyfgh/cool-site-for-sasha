import classes from './football.module.css'

const Football = () => {
    return (
        <div className={classes.footballNews}>
            <div className={classes.inputShell}>
                <input type="text" placeholder='Пошук' />
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2019/11/1913102017__m.jpg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>Матчі чергового туру Чемпіонату Черкаської області з футболу DEFENDA-ЛІГА відбулися 27 травня 5 тур</b>
                    <span><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</span>
                    <p>Двадцять сьомого травня відбулися ігри завершального туру, за підсумками якого визначилися переможець...</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/lnz.jpg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>Відео гри: Чемпіонат України з футболу. I ліга. «Полісся» – ФК «ЛНЗ» – 2:1</b>
                    <span><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</span>
                    <p>Підсумкова турнірна таблиця Чемпіонату України з футболу (I ліга, група «Чемпіонська»)
                        (27.05.2023) Група «А» ФК «Златокрай-2017»...</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2022/11/video-hry8.jpg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>Гра Екстра-ліги України з футзалу «ХІТ» – «Ураган» – 2:0</b>
                    <span><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</span>
                    <p>Відео гри: Чемпіонат України з футболу. I ліга. «Полісся» – ФК «ЛНЗ» – 2:1
                        (27.05.2023) Група «А» ФК «Златокрай-2017»...</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/1685012484151021-1024x610.jpg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>Доненко: На Чемпіонаті Європи головне не підвести наші ЗСУ, які відвойовують мир для України</b>
                    <span><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</span>
                    <p>Доненко: На Чемпіонаті Європи головне не підвести наші ЗСУ, які відвойовують мир для України...</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>

            <div className={classes.lastActualNews}>
                <div className={classes.imgShell}>
                    <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/dovbyk-i-mykolenko-.jpeg" alt="..." />
                </div>
                <div className={classes.textBlock}>
                    <b>Довбик і Миколенко у списку національної збірної команди України на червневі матчі</b>
                    <span><i className={['fa-solid fa-clock']}></i> 27 травня, 2023</span>
                    <p>Довбик і Миколенко у списку національної збірної команди України на червневі матчі
                        (27.05.2023) Група «А» ФК «Златокрай-2017»...</p>
                    <button className={classes.readMore}>Читати більше..</button>
                </div>
            </div>
        </div>
    )
}

export default Football