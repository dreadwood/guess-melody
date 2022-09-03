type MistakesProps = {
  count: number
}

function Mistakes({count}: MistakesProps): JSX.Element {
  const mistakes = Array.from({length: count}, () => null);

  return (
    <div className="game__mistakes">
      {mistakes.map((it) => (<div className="wrong" key={`mistake-${it}`} />))}
    </div>
  );
}

export default Mistakes;
