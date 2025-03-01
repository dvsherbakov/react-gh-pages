import { useState } from "react";
import styles from "./sentenses.module.scss";
import Speech from "react-text-to-speech";

export type Phrase = {
  phrase: string;
  variants: string[];
  subsequence: number[];
  onCheck?: (isCorrect: boolean) => void;
};

export const SentencesTest = (phrase: Phrase) => {
  const [list, setList] = useState<string[]>([]);
  const [word, setWord] = useState<string | undefined>(undefined);
  const [checked, setChecked] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.phraseGroup}>
        <div className={styles.phrase}>{phrase.phrase}</div>
      </div>
      <div
        className={[
          styles.dest,
          checked ? (isCorrect ? styles.correct : styles.incorrect) : "",
        ].join(" ")}
        onDrop={() => {
          if (!checked) setList((lst) => [...lst, word || "undo"]);
        }}
        onDragOver={(x) => x.preventDefault()}
      >
        {list.map((s, idx) => (
          <div
            className={styles.word}
            key={idx.toString()}
            onClick={() => {
              setList((prev) => prev.filter((x) => x !== s));
            }}
            onDrop={(event) => {
              event.preventDefault();
              event.stopPropagation();
              const pos = list.findIndex((x) => x === s);
              if (pos > -1 && checked) {
                setList([
                  ...list.slice(0, pos),
                  word || "",
                  ...list.slice(pos),
                ]);
              }
            }}
          >
            {s}
          </div>
        ))}
        <div className={styles.speech}>
          <Speech text={list.length ? list.join(" ") : "nothing to speech"} />
        </div>
      </div>
      <div className={styles.src}>
        {phrase.variants.map((p, idx) => (
          <div className={checked?styles.checked:""}
            key={idx.toString()}
            onDragStart={() => setWord(p)}
            draggable={!checked}
          >
            {p}
          </div>
        ))}{" "}
      </div>
      <div className={styles.buttonWrapper}>
        <button
          disabled={checked}
          onClick={() => {
            let cnt = 0;
            list.forEach((p, idx) => {
              if (p === phrase.variants[phrase.subsequence[idx]]) {
                cnt++;
              }
            });
            setIsCorrect(cnt === phrase.subsequence.length);
            setChecked(true);
            if (phrase.onCheck) {
              phrase.onCheck(cnt === phrase.subsequence.length);
            }
          }}
        >
          Проверить
        </button>
      </div>
    </div>
  );
};
