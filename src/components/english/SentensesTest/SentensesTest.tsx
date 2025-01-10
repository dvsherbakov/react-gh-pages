import { faSync } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styles from "./sentenses.module.scss";

export type Phrase = {
  phrase: string;
  variants: string[];
  subsequence: number[];
};
const phrases: Phrase[] = [
  {
    phrase: "Она живет в большом городе",
    variants: [
      "a",
      "she",
      "he",
      "lives",
      "lived",
      "in",
      "where",
      "big",
      "was",
      "city",
    ],
    subsequence: [1, 3, 5, 0, 7, 9],
  },
];

export const SentensesTest = () => {
  const [marker, setMarker] = useState<number>(0);
  const [list, setList] = useState<string[]>(["she"]);
  const [word, setWord] = useState<string | undefined>(undefined);

  const next = () => {
    if (marker < phrases.length - 1) setMarker((pos) => ++pos);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.phraseGroup}>
        <div className={styles.phrase}>{phrases[marker].phrase}</div>
        <button onClick={next}>
          <FontAwesomeIcon icon={faSync} />
        </button>

        <div onClick={next}></div>
      </div>
      <div
        className={styles.dest}
        onDrop={() => {
          setList((lst) => [...lst, word || "undo"]);
        }}
        onDragOver={(x) => x.preventDefault()}
      >
        {list.map((s, idx) => (
          <div key={idx.toString()}>{s}</div>
        ))}
      </div>
      <div className={styles.src}>
        {phrases[marker].variants.map((p, idx) => (
          <div
            key={idx.toString()}
            onDragStart={() => setWord(p)}
            draggable={"true"}
          >
            {p}
          </div>
        ))}{" "}
      </div>
    </div>
  );
};
