import styles from "./english.module.scss";

export const EnglishToBe = () => (
  <main>
    <div className={styles.tabWrapper}>
      <div className={styles.tabHeader}>To be</div>
      <div className={[styles.group, styles.first].join(" ")}>
        <div>am</div>
        <div>I am</div>
      </div>
      <div className={[styles.group, styles.second].join(" ")}>
        <div>is</div>
        <div>He is</div>
        <div>She is</div>
        <div>It is</div>
      </div>
      <div className={[styles.group, styles.third].join(" ")}>
        <div>are</div>
        <div>We are</div>
        <div>You are</div>
        <div>They are</div>
      </div>
    </div>
    <div className={[styles.tabWrapper, styles.examples].join(" ")}>
      <span>
        I am - I<span className={styles.red}>'m</span>
      </span>
      <span>
        He is - He<span className={styles.red}>'s</span>
      </span>
      <span>
        You are - You<span className={styles.red}>'re</span>
      </span>
      <span></span>
      <span>
        She is - She<span className={styles.red}>'s</span>
      </span>
      <span>
        We are - We<span className={styles.red}>'re</span>
      </span>
    </div>
    <div className={styles.center}>BE</div>
    <div className={styles.tabWrapper}>
      <div className={styles.card}>
        <div className={styles.headWrapper}>
          <span className={[styles.header, styles.green].join(" ")}>am</span>
        </div>
        <ul>
          <li>
            <span className={styles.red}>I</span> am a teacher.
          </li>
          <li>I am tall.</li>
        </ul>
        <ul>
          <li>I am not a teacher</li>
          <li>I am not a tall</li>
        </ul>
      </div>
      <div className={styles.card}>
        <div className={styles.headWrapper}>
          <div className={[styles.header, styles.purple].join(" ")}>is</div>
        </div>
        <ul>
          <li>
            <span className={styles.red}>She</span> is Eva.
          </li>
          <li>
            <span className={styles.red}>Hi</span> is Ruslan.
          </li>
          <li>
            <span className={styles.red}>It</span> is a interesting.
          </li>
        </ul>
        <ul>
          <li>She is not Eva.</li>
          <li>Hi is not Ruslan.</li>
          <li>It is not interesting</li>
        </ul>
      </div>
      <div className={styles.card}>
        <div className={styles.headWrapper}>
          <div className={[styles.header, styles.pink].join(" ")}>are</div>
        </div>
        <ul>
          <li><span className={styles.red}>You</span> are students.</li>
          <li><span className={styles.red}>We</span> are happy.</li>
          <li><span className={styles.red}>They</span> are my friends.</li>
        </ul>
        <ul>
          <li>You are not students.</li>
          <li>We are not happy.</li>
          <li>They are not my friends.</li>
        </ul>
      </div>
    </div>
  </main>
);
