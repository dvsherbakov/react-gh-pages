import styles from "../ToBe/english.module.scss"

export const EnglishPresentSimple = () => <main>
  <div className={styles.center}>I, you, we, they</div>
  <article className={styles.tabWrapper}>
    <div className={styles.card}>
      <div className={styles.headWrapper}>
        <div className={[ styles.header, styles.green ].join(" ")}>+</div>
      </div>
      <ul>
        <li><span className={styles.red}>I work</span> every day.</li>
      </ul>
      <ul>
        <li><span className={styles.red}>You go</span> to the gym on Mondays.</li>
      </ul>
      <ul><li><span className={styles.red}>We play</span> board games in the evening</li></ul>
      <ul><li><span className={styles.red}>They go </span> to the movies together</li></ul>
    </div>
    <div className={styles.card}>
      <div className={styles.headWrapper}>
        <div className={[ styles.header, styles.purple ].join(" ")}>-</div>
      </div>
      <ul>
        <li>I<span className={styles.red}> don't</span> work every day.</li>
      </ul>
      <ul>
        <li>You <span className={styles.red}>don't</span> go to the gym on Mondays.</li>
      </ul>
      <ul><li>We <span className={styles.red}> don't</span> play board games in the evening.</li></ul>
      <ul>
        <li>They <span className={styles.red}>don't</span> go to the movies together.</li>
      </ul>
    </div>
    <div className={styles.card}>
      <div className={styles.headWrapper}>
        <div className={[ styles.header, styles.pink ].join(" ")}>?</div>
      </div>
      <ul><li><span className={styles.red}>Do I </span> work every day?</li></ul>
      <ul><li><span className={styles.red}>Do you </span> go to the gym on Mondays?</li></ul>
      <ul><li><span className={styles.red}>Do we </span> play board games in the evening?</li></ul>
      <ul><li><span className={styles.red}>Do they </span> go to the movies together?</li></ul>
    </div>
  </article>

  <article className={styles.tableWrapperFour}>
    <div/>
    <div className={[ styles.roundHeader, styles.borderRed ].join(" ")}>Present</div>
    <div className={[ styles.roundHeader, styles.borderGreen ].join(" ")}>Past</div>
    <div className={[ styles.roundHeader, styles.borderBlue ].join(" ")}>Future</div>
    <span>Simple</span>
    <span className={styles.red}>I do</span>
    <span className={styles.green}>I did</span>
    <span className={styles.blue}>I will do</span>
    <span>Continuous</span>
    <span className={styles.red}>I am doing</span>
    <span className={styles.green}>I was doing</span>
    <span className={styles.blue}>I will be doing</span>
    <span>Perfect</span>
    <span className={styles.red}>I have done</span>
    <span className={styles.green}>I had done</span>
    <span className={styles.blue}>I will have done</span>
    <span>Perfect</span>
    <span className={styles.red}>I have been</span>
    <span className={styles.green}>I have been do</span>
    <span className={styles.blue}>I will have been</span>
    <span>Continuous</span>
    <span className={styles.red}>doing</span>
    <span></span>
    <span></span>
  </article>
</main>