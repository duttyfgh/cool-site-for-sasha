import classes from './StartPagePC.module.css'

const StartPagePC = () => {
  return (
    <div className={classes.actualNews}>
      <div className={classes.bigBlock}>
        <div>
          <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/img_20230524_145724-1.jpg" alt="..." />
          <div className={classes.blockText}>
            <span>У Черкасах відбувся відкритий чемпіонат міста зі спортивної акробатики</span>
            <span>26 травня, 2023</span>
          </div>
        </div>
      </div>

      <div className={classes.litleBlock}>
        <div className={classes.litleItem}>
          <img src="https://cherkassy-sport.com/wp-content/uploads/2023/05/lnz.jpg" alt="..." />
          <div className={classes.blockText}>
            <span>Підсумкова турнірна таблиця Чемпіонату України з футболу (I ліга, група «Чемпіонська»)</span>
            <span>27 травня, 2023</span>
          </div>
        </div>

        <div className={classes.litleItem}>
          <img src="https://cherkassy-sport.com/wp-content/uploads/2022/11/priama.jpg" alt="..." />
          <div className={classes.blockText}>
            <span>Відео гри Чемпіонату Черкащини з футболу «Карбон» – «Профіспорт»</span>
            <span>27 травня, 2023</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default StartPagePC
