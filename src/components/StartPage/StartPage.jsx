import { useEffect, useState } from 'react'
import NewsForMainPage from '../news/newsForMainPage/newsForMainPage'
import classes from './sartPage.module.css'
import StartPagePC from './StartPagePC'

const StartPageLTAndTablet = () => {
    return (
        <div className={classes.actualNews}>
            <div className={classes.actualFirst}>
                <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/img_20230524_145724-1.jpg" alt="..." />
                <div className={classes.blockText}>
                    <span>У Черкасах відбувся відкритий чемпіонат міста зі спортивної акробатики</span>
                    <span>26 травня, 2023</span>
                </div>
            </div>

            <div className={classes.actualFirst}>
                <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/lnz.jpg" alt="..." />
                <div className={classes.blockText}>
                    <span>Підсумкова турнірна таблиця Чемпіонату України з футболу (I ліга, група «Чемпіонська»)</span>
                    <span>26 травня, 2023</span>
                </div>
            </div>

            <div className={classes.actualFirst}>
                <img src="https://cherkassy-sport.com/wp-content/uploads/2022/11/priama.jpg" alt="..." />
                <div className={classes.blockText}>
                    <span>У Черкасах відбувся відкритий чемпіонат міста зі спортивної акробатики</span>
                    <span>26 травня, 2023</span>
                </div>
            </div>
        </div>
    )
}

const StartPage = () => {
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

    let Component

    switch (true) {
        case screenWidth > 1600:
            Component = <StartPagePC />
            break

        default:
            Component = <StartPageLTAndTablet />
            break
    }

    return (
        <div className={classes.startPage}>
            {Component}
            <NewsForMainPage />
        </div>
    )
}

export default StartPage