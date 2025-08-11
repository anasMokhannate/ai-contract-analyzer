import ClauseCard from '../clauseCard/clauseCard.tsx';

export default function Results() {

  const resultsData = [
    { id: 1, title: "clause 1", state: "Risky" },
    { id: 2, title: "clause 2", state: "Safe" },
    { id: 3, title: "clause 3", state: "Very Risky" } 
  ];

  return (
    <div className="results">
      <h2>Results</h2>
      <div className="results-list">
        {resultsData.map(item => (
          <ClauseCard 
            title={item.title} 
            state={item.state} 
          />
        ))}
      </div>
    </div>
  );
}
