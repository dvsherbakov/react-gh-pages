import styles from "./atonin.module.scss";

const ph = [
  { pr: "On", pos: "Monday", descr: "Day" },
  { pr: "In", pos: "2024", descr: "Year" },
  { pr: "At", pos: "ten o`clock", descr: "Time" },
  { pr: "On", pos: "a bicycle", descr: "Mode of transport" },
  { pr: "At", pos: "the office", descr: "Place" },
  { pr: "In", pos: "Summer", descr: "Season" },
  { pr: "At", pos: "the age of forty", descr: "Age" },
  { pr: "On", pos: "the ground", descr: "Position" },
  { pr: "In", pos: "good health", descr: "State or condition" },
];

export const AtOnIn = () => (
  <div className={ styles.container }>
    <h1>At/On/In</h1>
    <div className={ styles.btable }>
      <div>
        <h2>At</h2>
        <ul>
          <li>Time</li>
          <li>Age</li>
          <li>Place</li>
        </ul>
      </div>
      <div>
        <h2>On</h2>
        <ul>
          <li>Day</li>
          <li>Mode of Transport</li>
          <li>Position</li>
        </ul>
      </div>
      <div>
        <h2>In</h2>
        <ul>
          <li>Week</li>
          <li>Season</li>
          <li>State or Condition</li>
        </ul>
      </div>
    </div>
    <div>
      {ph.map((x, idx) => (
        <div key={ idx.toString() }>
          <span>{x.pr}</span>
          <span>{x.pos}</span>
          <span>{x.descr}</span>
        </div>
      ))}
    </div>
  </div>
);
