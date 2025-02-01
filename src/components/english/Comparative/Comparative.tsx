const rules = [
  {
    idx: "1",
    form: "adjective + -er",
    examples: [ "short->shorter", "big->bigger" ],
  },
  {
    idx: "2 (end in -y)",
    form: "adjective + -er (change -y to -i)",
    examples: [ "hungry->hungrier", "noisy->noisier" ],
  },
  {
    idx: "2+",
    form: "more + adjective",
    examples: [ "modern->more modern", "expensive->more expensive" ],
  },
];

export const Comparative = () => {
  return (
    <>
      <div>
        <span>Syllables</span>
        <span>Form</span>
        <span>Examples</span>
      </div>
    </>
  );
};
