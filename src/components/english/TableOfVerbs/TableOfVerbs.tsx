import styles from "./table.module.scss";

export const TableOfVerbs = () => (
  <div className={styles.table}>
    <div className={styles.centerCell}>question</div>
    <div className={styles.centerCell}>statement</div>
    <div className={styles.centerCell}>negation</div>
    <div></div>
    <div className={styles.cell}>
      <div className={styles.group}>
        <div className={styles.pGroup}>Will</div>
        <div className={styles.pGroup}>
          <span>I</span>
          <span>You</span>
          <span>We</span>
          <span>They</span>
          <span>He</span>
          <span>She</span>
        </div>
        <div className={styles.pGroup}>love?</div>
      </div>
    </div>
    <div className={styles.cell}>
      <div className={styles.group}>
        <div className={styles.pGroup}>
          <span>I</span>
          <span>You</span>
          <span>We</span>
          <span>They</span>
          <span>He</span>
          <span>She</span>
        </div>
        <div className={styles.pGroup}>will love</div>
      </div>
    </div>
    <div className={styles.cell}>
      <div className={styles.group}>
        <div className={styles.pGroup}>
          <span>I</span>
          <span>You</span>
          <span>We</span>
          <span>They</span>
          <span>He</span>
          <span>She</span>
        </div>
        <div className={styles.pGroup}>will not love</div>
      </div>
    </div>

    <div className={styles.centerCell}>future</div>
    <div className={styles.cell}>
      <div className={styles.group}>
        <div className={styles.pGroup}>Do</div>
        <div className={styles.pGroup}>
          <span>I</span>
          <span>You</span>
          <span>We</span>
          <span>They</span>
        </div>
        <div className={styles.pGroup}>love?</div>
      </div>
      <div className={styles.group}>
        <div className={styles.pGroup}>Does</div>
        <div className={styles.pGroup}>
          <span>He</span>
          <span>She</span>
        </div>
        <div className={styles.pGroup}>love?</div>
      </div>
    </div>
    <div className={styles.cell}>
      <div className={styles.group}>
        <div className={styles.pGroup}>
          <span>I</span>
          <span>You</span>
          <span>We</span>
          <span>They</span>
        </div>
        <div className={styles.pGroup}>love</div>
      </div>
      <div className={styles.group}>
        <div className={styles.pGroup}>
          <span>He</span>
          <span>She</span>
        </div>
        <div className={styles.pGroup}>loves</div>
      </div>
    </div>
    <div className={styles.cell}>
      <div className={styles.group}>
        <div className={styles.pGroup}>
          <span>I</span>
          <span>You</span>
          <span>We</span>
          <span>They</span>
        </div>
        <div className={styles.pGroup}>don't love</div>
      </div>
      <div className={styles.group}>
        <div className={styles.pGroup}>
          <span>He</span>
          <span>She</span>
        </div>
        <div className={styles.pGroup}>doesn't love</div>
      </div>
    </div>
    <div className={styles.centerCell}>present</div>
    <div className={styles.cell}>
      <div className={styles.group}>
        <div className={styles.pGroup}>Did</div>
        <div className={styles.pGroup}>
          <span>I</span>
          <span>You</span>
          <span>We</span>
          <span>They</span>
          <span>He</span>
          <span>She</span>
        </div>
        <div className={styles.pGroup}>love?</div>
      </div>
    </div>
    <div className={styles.cell}>
      <div className={styles.group}>
        <div className={styles.pGroup}>
          <span>I</span>
          <span>You</span>
          <span>We</span>
          <span>They</span>
          <span>He</span>
          <span>She</span>
        </div>
        <div className={styles.pGroup}>loved</div>
      </div>
    </div>
    <div className={styles.cell}>
      <div className={styles.group}>
        <div className={styles.pGroup}>
          <span>I</span>
          <span>You</span>
          <span>We</span>
          <span>They</span>
          <span>He</span>
          <span>She</span>
        </div>
        <div className={styles.pGroup}>did not love</div>
      </div>
    </div>
    <div className={styles.centerCell}>past</div>
  </div>
);

