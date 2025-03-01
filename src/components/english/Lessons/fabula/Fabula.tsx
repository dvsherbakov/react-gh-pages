import styles from "./fabula.module.scss";
import React from "react";

export type PreliminaryProps = {
    caption: string;
    quote: string;
}

export const Preliminary = (props: PreliminaryProps) => (<div className={styles.preliminary}>
  <h1>{props.caption}</h1>
  <div className={styles.quote}>
    “{props.quote}”.
  </div>
</div>)