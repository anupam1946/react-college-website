import React from 'react';
import { Link } from 'react-router-dom';

const ProgramList = () => {
  const programs = [
    { id: 1, name: "Bachelor's in Computer Science" },
    { id: 2, name: "Bachelors in Business Administration" },
    { id: 3, name: "Diploma in Graphic Design" },
  ];

  return (
    <div className="program-list">
      {programs.map((program) => (
        <div key={program.id} className="program-item">
          <h3>{program.name}</h3>
          <Link to={`/programs/${program.id}`}>Learn More</Link>
        </div>
      ))}
    </div>
  );
};

export default ProgramList;
