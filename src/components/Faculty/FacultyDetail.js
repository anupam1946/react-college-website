import React from 'react';
import { useParams } from 'react-router-dom';
import './FacultyDetail.css';
import ab from '../../assets/ab.jpg';
import an from '../../assets/an.jpg';
import ka from '../../assets/ka.jpg';
import ayu from '../../assets/ayu.jpg';
import aayu from '../../assets/aayu.jpg';
import anup from '../../assets/anup.jpg';
import alisha from '../../assets/alisha.jpg';

const FacultyDetail = () => {
  const { name } = useParams(); // Get the name from the URL

  const facultyMembers = [
    {
      name: 'Dr.abishkar k.c',
      position: 'Head of Computer Science',
      image: ab,
      bio: 'Expert in Artificial Intelligence and Data Science with 20 years of teaching experience.',
    },
    {
      name: 'Dr. anuj k.c',
      position: 'Professor of Business Administration',
      image: an,
      bio: 'Specializes in Marketing Strategy and Organizational Leadership.',
    },
    {
      name: 'Dr.kamala bista',
      position: 'Associate Professor of Engineering',
      image: ka,
      bio: 'Focuses on Renewable Energy and Sustainable Engineering.',
    },
    {
      name: 'Dr. ayush chettri',
      position: 'Senior Lecturer in Mathematics',
      image: ayu,
      bio: 'Passionate about Abstract Algebra and Geometry.',
    },
    {
      name: 'Dr. ayushma chettri',
      position: 'Assistant Professor in Chemistry',
      image: aayu,
      bio: 'Expert in Organic Chemistry and Environmental Sciences.',
    },
    {
      name: 'Dr. anupam k.c',
      position: 'Visiting Professor in Physics',
      image: anup,
      bio: 'Specializes in Quantum Mechanics and Astrophysics.',
    },
    {
      name: 'Dr. Alisha k.c',
      position: 'Visiting Professor in mathematics and physics.',
      image: alisha,
      bio: 'Specializes in Quantum Mechanics and Astrophysics.',
    },
  ];

  // Find the faculty member by name
  const faculty = facultyMembers.find((member) => member.name === name);

  if (!faculty) {
    return <h2>Faculty member not found</h2>;
  }

  return (
    <div className="faculty-detail">
      <img src={faculty.image} alt={`Portrait of ${faculty.name}`} />
      <h1>{faculty.name}</h1>
      <h3>{faculty.position}</h3>
      <p>{faculty.bio}</p>
    </div>
  );
};

export default FacultyDetail;
