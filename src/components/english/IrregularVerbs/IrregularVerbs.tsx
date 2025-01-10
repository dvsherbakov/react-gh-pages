import styles from "./irregular.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { ChangeEvent, useEffect, useState } from "react";

const irregularVerbsTable = [
  { inf: "arise", past: "arose", part: "arisen", transl: "подниматься" },
  {
    inf: "awake",
    past: "awoke",
    part: "awoken",
    transl: "пробуждать",
  },
  { inf: "be", past: "was (were)", part: "been", transl: "быть" },
  { inf: "bear", past: "bore", part: "born", transl: "рожать, переносить" },
  {
    inf: "beat",
    past: "beat",
    part: "beaten",
    transl: "бить",
  },
  { inf: "become", past: "became", part: "become", transl: "становиться" },
  { inf: "begin", past: "began", part: "begun", transl: "начинать" },
  {
    inf: "bend",
    past: "bent",
    part: "bent",
    transl: "наклонять",
  },
  { inf: "bet", past: "bet", part: "bet", transl: "заключать пари" },
  { inf: "bind", past: "bound", part: "bound", transl: "связывать" },
  {
    inf: "bite",
    past: "bit",
    part: "bitten",
    transl: "кусать",
  },
  { inf: "bleed", past: "bled", part: "bled", transl: "кровоточить" },
  { inf: "blow", past: "blew", part: "blown", transl: "дуть" },
  {
    inf: "break",
    past: "broke",
    part: "broken",
    transl: "ломать",
  },
  { inf: "breed", past: "bred", part: "bred", transl: "разводить животных" },
  {
    inf: "bring",
    past: "brought",
    part: "brought",
    transl: "приносить",
  },
  { inf: "build", past: "built", part: "built", transl: "строить" },
  { inf: "buy", past: "bought", part: "bought", transl: "покупать" },
  {
    inf: "catch",
    past: "caught",
    part: "caught",
    transl: "ловить",
  },
  { inf: "choose", past: "chose", part: "chosen", transl: "выбирать" },
  { inf: "cling", past: "clung", part: "clung", transl: "цепляться" },
  {
    inf: "come",
    past: "came",
    part: "come",
    transl: "приходить",
  },
  { inf: "cost", past: "cost", part: "cost", transl: "стоить" },
  { inf: "cut", past: "cut", part: "cut", transl: "резать" },
  {
    inf: "deal",
    past: "dealt",
    part: "dealt",
    transl: "вести дела",
  },
  { inf: "dig", past: "dug", part: "dug", transl: "копать" },
  { inf: "do", past: "did", part: "done", transl: "делать" },
  {
    inf: "draw",
    past: "drew",
    part: "drawn",
    transl: "рисовать, тянуть",
  },
  { inf: "drink", past: "drank", part: "drunk", transl: "пить" },
  { inf: "drive", past: "drove", part: "driven", transl: "водить автомобиль" },
  {
    inf: "eat",
    past: "ate",
    part: "eaten",
    transl: "кушать",
  },
  { inf: "fall", past: "fell", part: "fallen", transl: "падать" },
  { inf: "feed", past: "fed", part: "fed", transl: "кормить" },
  {
    inf: "feel",
    past: "felt",
    part: "felt",
    transl: "чувствовать",
  },
  { inf: "fight", past: "fought", part: "fought", transl: "бороться" },
  { inf: "find", past: "found", part: "found", transl: "находить" },
  {
    inf: "flee",
    past: "fled",
    part: "fled",
    transl: "сбегать",
  },
  { inf: "fly", past: "flew", part: "flown", transl: "летать" },
  { inf: "forbid", past: "forbade", part: "forbidden", transl: "запрещать" },
  {
    inf: "forget",
    past: "forgot",
    part: "forgotten",
    transl: "забывать",
  },
  { inf: "forgive", past: "forgave", part: "forgiven", transl: "прощать" },
  { inf: "freeze", past: "froze", part: "frozen", transl: "замораживать" },
  {
    inf: "get",
    past: "got",
    part: "got",
    transl: "(gotten) получать",
  },
  { inf: "give", past: "gave", part: "given", transl: "давать" },
  { inf: "go", past: "went", part: "gone", transl: "идти" },
  {
    inf: "grow",
    past: "grew",
    part: "grown",
    transl: "расти",
  },
  { inf: "hang", past: "hung", part: "hung", transl: "висеть" },
  { inf: "have", past: "had", part: "had", transl: "иметь" },
  {
    inf: "hear",
    past: "heard",
    part: "heard",
    transl: "слышать",
  },
  { inf: "hide", past: "hid", part: "hidden", transl: "прятать" },
  { inf: "hit", past: "hit", part: "hit", transl: "ударять, попадать" },
  {
    inf: "hold",
    past: "held",
    part: "held",
    transl: "держать",
  },
  { inf: "hurt", past: "hurt", part: "hurt", transl: "причинять боль" },
  { inf: "keep", past: "kept", part: "kept", transl: "сохранять, соблюдать" },
  {
    inf: "know",
    past: "knew",
    part: "known",
    transl: "знать",
  },
  { inf: "lay", past: "laid", part: "laid", transl: "класть" },
  { inf: "lead", past: "led", part: "led", transl: "вести, лидировать" },
  {
    inf: "learn",
    past: "learnt (learned)",
    part: "learnt (learned)",
    transl: "учиться, узнавать",
  },
  { inf: "leave", past: "left", part: "left", transl: "покидать, оставлять" },
  { inf: "lend", past: "lent", part: "lent", transl: "давать взаймы" },
  {
    inf: "let",
    past: "let",
    part: "let",
    transl: "позволять",
  },
  { inf: "lie", past: "lay", part: "lain", transl: "лежать" },
  { inf: "light", past: "lit", part: "lit", transl: "зажигать, освещать" },
  {
    inf: "lose",
    past: "lost",
    part: "lost",
    transl: "терять",
  },
  { inf: "make", past: "made", part: "made", transl: "делать, мастерить" },
  { inf: "mean", past: "meant", part: "meant", transl: "значить" },
  {
    inf: "meet",
    past: "met",
    part: "met",
    transl: "встречать, знакомиться",
  },
  { inf: "pay", past: "paid", part: "paid", transl: "платить" },
  { inf: "put", past: "put", part: "put", transl: "класть, ставить" },
  {
    inf: "read",
    past: "read",
    part: "read",
    transl: "читать",
  },
  { inf: "ride", past: "rode", part: "ridden", transl: "ездить верхом" },
  { inf: "ring", past: "rang", part: "rung", transl: "звонить" },
  {
    inf: "rise",
    past: "rose",
    part: "risen",
    transl: "возрастать, подниматься",
  },
  { inf: "run", past: "ran", part: "run", transl: "бежать" },
  { inf: "say", past: "said", part: "said", transl: "сказать" },
  {
    inf: "see",
    past: "saw",
    part: "seen",
    transl: "видеть",
  },
  { inf: "seek", past: "sought", part: "sought", transl: "искать" },
  { inf: "sell", past: "sold", part: "sold", transl: "продавать" },
  {
    inf: "send",
    past: "sent",
    part: "sent",
    transl: "посылать",
  },
  { inf: "set", past: "set", part: "set", transl: "устанавливать" },
  { inf: "shake", past: "shook", part: "shaken", transl: "трясти" },
  {
    inf: "shine",
    past: "shone",
    part: "shone",
    transl: "светить, сиять",
  },
  { inf: "shoot", past: "shot", part: "shot", transl: "стрелять" },
  { inf: "show", past: "showed", part: "shown", transl: "показывать" },
  {
    inf: "shrink",
    past: "shrank",
    part: "shrunk",
    transl: "сжиматься",
  },
  { inf: "shut", past: "shut", part: "shut", transl: "закрывать, затворять" },
  { inf: "sing", past: "sang", part: "sung", transl: "петь" },
  {
    inf: "sit",
    past: "sat",
    part: "sat",
    transl: "сидеть",
  },
  { inf: "sleep", past: "slept", part: "slept", transl: "спать" },
  { inf: "slide", past: "slid", part: "slid", transl: "скользить" },
  {
    inf: "smell",
    past: "smelt",
    part: "smelt",
    transl: "пахнуть, нюхать",
  },
  { inf: "speak", past: "spoke", part: "spoken", transl: "говорить" },
  {
    inf: "spell",
    past: "spelt (spelled)",
    part: "spelt (spelled)",
    transl: "произносить или писать по буквам",
  },
  {
    inf: "spend",
    past: "spent",
    part: "spent",
    transl: "тратить, проводить время",
  },
  {
    inf: "spill",
    past: "spilt (spilled)",
    part: "spilt (spilled)",
    transl: "разлить",
  },
  { inf: "spin", past: "spun", part: "spun", transl: "крутить" },
  {
    inf: "split",
    past: "split",
    part: "split",
    transl: "разделять, раскалывать",
  },
  {
    inf: "spoil",
    past: "spoilt (spoiled) ",
    part: "spoilt (spoiled)",
    transl: "портить",
  },
  {
    inf: "spread",
    past: "spread",
    part: "spread",
    transl: "разворачивать, распространять",
  },
  {
    inf: "stand",
    past: "stood",
    part: "stood",
    transl: "стоять",
  },
  { inf: "steal", past: "stole", part: "stolen", transl: "воровать" },
  { inf: "sting", past: "stung", part: "stung", transl: "жалить" },
  {
    inf: "stink",
    past: "stank",
    part: "stunk",
    transl: "вонять",
  },
  {
    inf: "strike",
    past: "struck",
    part: "struck",
    transl: "бастовать, ударять",
  },
  {
    inf: "swear",
    past: "swore",
    part: "sworn",
    transl: "клясться, ругаться",
  },
  { inf: "sweep", past: "swept", part: "swept", transl: "подметать" },
  {
    inf: "swell",
    past: "swelled",
    part: "swollen",
    transl: "(swelled) опухать",
  },
  { inf: "swim", past: "swam", part: "swum", transl: "плавать" },
  { inf: "take", past: "took", part: "taken", transl: "брать" },
  {
    inf: "teach",
    past: "taught",
    part: "taught",
    transl: "обучать",
  },
  { inf: "tear", past: "tore", part: "torn", transl: "рвать" },
  { inf: "tell", past: "told", part: "told", transl: "рассказывать" },
  {
    inf: "think",
    past: "thought",
    part: "thought",
    transl: "думать",
  },
  { inf: "throw", past: "threw", part: "thrown", transl: "бросать" },
  {
    inf: "understand",
    past: "understood",
    part: "understood",
    transl: "понимать",
  },
  { inf: "wake", past: "woke", part: "woken", transl: "будить" },
  { inf: "wear", past: "wore", part: "worn", transl: "носить (одежду)" },
  {
    inf: "win",
    past: "won",
    part: "won",
    transl: "побеждать",
  },
  {
    inf: "wind",
    past: "wound",
    part: "wound",
    transl: "обматывать, изгибаться",
  },
  { inf: "write", past: "wrote", part: "written", transl: "писать" },
];
export const IrregularVerbs = () => {
  const [list, setList] = useState<
    { inf: string; past: string; part: string; transl: string }[]
  >([]);

  useEffect(() => {
    const tmp = new Set<number>();
    while (tmp.size < 10) {
      tmp.add(Math.round(Math.random() * irregularVerbsTable.length));
    }
    setList(Array.from(tmp).map((x) => irregularVerbsTable[x]));
  }, []);

  const onInput = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value.length >= 2) {
      setList(
        irregularVerbsTable.filter(
          (x) =>
            x.inf.includes(event.target.value) ||
            x.past.includes(event.target.value) ||
            x.part.includes(event.target.value) ||
            x.transl.includes(event.target.value),
        ),
      );
    }
  };
  return (
    <div className={styles.tableWrapper}>
      <div className={styles.searchBlock}>
        <input type={"text"} autoFocus={true} onChange={onInput} />
        <button>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      {list.map((x, idx) => (
        <div key={idx.toString()} className={styles.tableRow}>
          <div>{x.inf}</div>
          <div>{x.past}</div>
          <div>{x.part}</div>
          <div>{x.transl}</div>
        </div>
      ))}
    </div>
  );
};

