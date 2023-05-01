import React from 'react';
import './university.css';
export default function University({ university }) {
  return (
    <div className="university">
      <h3 className="noOf">{university.length} University</h3>
      <div className="uni-grid">
        {university.map((uni) => {
          return (
            <div className="uni">
              <h1 className="uni-name">{uni}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
