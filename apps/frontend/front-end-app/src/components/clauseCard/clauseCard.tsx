import React from "react";
import "./clauseCard.css";

export default function ClauseCard({title, state}) {

  return (
    <div className="ClauseCard">
      <div className="ClauseCard-header">
        <h3>{title}</h3>
        <span className="dropdown-icon" aria-label="Toggle details" role="img"> ▼ </span>
      </div>

      <div className="state">
        <p>{state}</p>
      </div>
    </div>
  );
}

