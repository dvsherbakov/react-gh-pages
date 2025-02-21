import styles from "./intro.module.scss";
export const Intro = () => {
    return (<div className={styles.wrapper}>
      <div className={styles.intro}>
        <h1>Intro</h1>
        <div className={styles.quote}>
          “Любое знание нужно представлять себе в виде своего рода семантического дерева. Убедитесь что вы прежде всего понимаете фундаментальные основы – ствол и крупные ветви – прежде чем переходить к листьям”.
        </div>
        <div className={styles.fab}>
          <p>В английском языке, в отличие от русского, всегда есть подлежащее и сказуемое (действие).</p>
          <p><strong>Подлежащее всегда стоит перед сказуемым.</strong></p>
          <p>Подлежащее отвечает на вопрос "кто?" или "что?". Чаще всего оно выражено существительным (друг, мама, машина) или местоимением (я, ты, он).</p>
        </div>
        <div className={styles.tabWrapper}>
          <span>Местоимения:</span>
          <div className={styles.tab}>
            <div>
              <p>
                <span><strong>Кто</strong></span>
                <span>I - я</span>
              </p>
              <p>
                <span>you - ты</span>
              </p>
              <p>
                <span>he - он</span>
                <span>she - она</span>
                <span>it - оно, это</span>
              </p>
              <p>
                <span>we - мы</span>
              </p>
              <p>
                <span>you - вы</span>
              </p>
              <span>they - они</span>
            </div>
            <div>
              <p>
                <span><strong>Чей</strong></span>
                <span>my - мой</span>
              </p>
              <p>
                <span>your - твой</span>
              </p>
              <p>
                <span>his - его</span>
                <span>her - её</span>
                <span>its</span>
              </p>
              <p><span>out - наш</span></p>
              <p><span>your - ваш</span></p>
              <p><span>their - их</span></p>
            </div>
            <div>
              <p>
                <span><strong>Падеж</strong></span>
                <span>me - меня</span>
              </p>
              <p>
                <span>you - тебя</span>
              </p>
              <p>
                <span>him - его</span>
                <span>her = её</span>
                <span>it - это</span>
              </p>
              <p>
                <span>us - нас</span>
              </p>
              <p><span>you - вас</span></p>
              <p><span>them - их</span></p>
            </div>
          </div>
        </div>
        <div className={styles.fab}>
          <strong id='predicate'>Сказуемое </strong> обычно выражено действием (бегать, прыгать, любить).
        </div>
      </div>
    </div>)
}