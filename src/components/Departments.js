// src/components/Departments.js
import React from 'react';

const Departments = () => {
  const departmentsList = [
    'Department of Computer Science',
    'Department of Business Administration',
    'Department of Civil Engineering',
    'Department of Data Science',
  ];

  return (
    <section id="departments">
      <h2>Departments</h2>
      <ul>
        {departmentsList.map((department, index) => (
          <li key={index}>{department}</li>
        ))}
      </ul>
    </section>
  );
};

export default Departments;
