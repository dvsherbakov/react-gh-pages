import styles from "./daily.module.scss";
import { useState } from "react";

export const DailyPhrases = () => {
    const [ marker, setMarker ] = useState<number>(0)
    const [ side, setSide ] = useState<boolean>(true)
    const ph: { en: string; ru: string }[] = [
        {
            en: "I's not of you business",
            ru: "Это не твое дело",
        },
        {
            en: "I mean it",
            ru: "Я не шучу",
        },
        {
            en: "I have no idea",
            ru: "Я понятия не имею",
        },
        {
            en: "I'm all ears",
            ru: "Я весь - внимание",
        },
        { en: "You should go with us", ru: "Тебе следует пойти с нами" },
        { en: "Will you call her?", ru: "Ты позвонишь ей?" },
        {
            en: "Find out",
            ru: "Узнавать",
        },
        { en: "I don't care", ru: "Мне наплевать" },
        { en: "It's up to you", ru: "Тебе решать" },
        {
            en: "What are you driving at?",
            ru: "К чему ты клонишь?",
        },
        { en: "Give or take", ru: "Плюс минус (приблизительно)" },
        { en: "How come?", ru: "Как так вышло?" },
        {
            en: "Help yourself",
            ru: "Угощайтесь",
        },
        { en: "Once & for all", ru: "Раз и навсегда" },
        { en: "At once", ru: "Немедленно" },
        { en: "Binge watch", ru: "Смотреть запоем" },
        {
            en: "Once in a while",
            ru: "Время от времени",
        },
        {
            en: "Frankly speaking",
            ru: "Честно говоря",
        },
        { en: "I'm sorry to bother you", ru: "Извините за беспокойство" },
        { en: "I'm positive", ru: "Я абсолютно уверен" },
        {
            en: "Why don't we/you...?",
            ru: "Почему бы тебе не ...?",
        },
        { en: "I'm good to go!", ru: "Я готов" },
        { en: "I'm all ears", ru: "Я тебя внимательно слушаю" },
        { en: "I,m done!", ru: "Я закончил/С меня хватит!" }
    ];
    const incMarker = () => {
        setMarker((marker < ph.length - 1) ? marker + 1 : 0)
    }
    const decMarker = () => {
        setMarker(marker > 0 ? marker - 1 : ph.length - 1)
    }

    const changeSide = () => {
        setSide((val)=> !val)
    }

    return (
      <main className={styles.wrapper}>
        <button onClick={decMarker}>-</button>
        <section className={side?styles.rotate:""} onClick={changeSide}>
          <div className={styles.one}>{ph[ marker ].en}</div>
          <div className={styles.two}>{ph[ marker ].ru}</div>
        </section>
        <button onClick={incMarker}>+</button>
      </main>
    );
};
