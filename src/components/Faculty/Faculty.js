// import React, { useState } from 'react';
// import './Faculty.css'; // Import the CSS file
// import ab from '../../assets/ab.jpg';
// import an from '../../assets/an.jpg';
// import ka from '../../assets/ka.jpg';
// import ayu from '../../assets/ayu.jpg';
// import aayu from '../../assets/aayu.jpg';
// import anup from '../../assets/anup.jpg';

// const Faculty = () => {
//   const facultyMembers = [
//     {
//       name: 'Dr.abishkar k.c',
//       position: 'Head of Computer Science',
//       image: ab,
//       bio: 'Expert in Artificial Intelligence and Data Science with 20 years of teaching experience.',
//     },
//     {
//       name: 'Dr. anuj k.c',
//       position: 'Professor of Business Administration',
//       image: an,
//       bio: 'Specializes in Marketing Strategy and Organizational Leadership.',
//     },
//     {
//       name: 'Dr.kamala bista',
//       position: 'Associate Professor of Engineering',
//       image: ka,
//       bio: 'Focuses on Renewable Energy and Sustainable Engineering.',
//     },
//     {
//       name: 'Dr. ayush chettri',
//       position: 'Senior Lecturer in Mathematics',
//       image: ayu,
//       bio: 'Passionate about Abstract Algebra and Geometry.',
//     },
//     {
//       name: 'Dr. ayushma chettri',
//       position: 'Assistant Professor in Chemistry',
//       image: aayu,
//       bio: 'Expert in Organic Chemistry and Environmental Sciences.',
//     },
//     {
//       name: 'Dr. anupam k.c',
//       position: 'Visiting Professor in Physics',
//       image: anup,
//       bio: 'Specializes in Quantum Mechanics and Astrophysics.',
//     },
//   ];

//   // State to manage how many cards to show
//   const [visibleCount, setVisibleCount] = useState(3);

//   // Function to show more cards
//   const handleShowMore = () => {
//     setVisibleCount((prevCount) => prevCount + 3);
//   };

//   return (
//     <section id="faculty" className="faculty-section">
//       <h2 className="faculty-title">Meet Our Esteemed Faculty Members</h2>
//       <div className="faculty-container">
//         {facultyMembers.slice(0, visibleCount).map((member, index) => (
//           <div className="faculty-card" key={index}>
//             <img
//               src={member.image}
//               alt={`Portrait of ${member.name}`}
//               className="faculty-image"
//             />
//             <h3 className="faculty-name">{member.name}</h3>
//             <p className="faculty-position">{member.position}</p>
//             <p className="faculty-bio">{member.bio}</p>
//           </div>
//         ))}
//       </div>
//       {visibleCount < facultyMembers.length && (
//         <button className="show-more-btn" onClick={handleShowMore}>
//           Show More
//         </button>
//       )}
//     </section>
//   );
// };

// export default Faculty;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import './Faculty.css';
import ab from '../../assets/ab.jpg';
import an from '../../assets/an.jpg';
import ka from '../../assets/ka.jpg';
import ayu from '../../assets/ayu.jpg';
import aayu from '../../assets/aayu.jpg';
import anup from '../../assets/anup.jpg';
import alisha from '../../assets/alisha.jpg'

const Faculty = () => {
  const navigate = useNavigate(); // Hook for navigation
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
      name: 'Dr.Alisha k.c',
      position: 'Visiting Professor in mathematics and physics.',
      image: alisha,
      bio: 'Specializes in Quantum Mechanics and Astrophysics.',
    },
  ];

  // State to manage how many cards to show
  const [visibleCount, setVisibleCount] = useState(3);

  // Function to show more cards
  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };

  return (
    <section id="faculty" className="faculty-section">
      <h2 className="faculty-title">Meet Our Esteemed Faculty Members</h2>
      <div className="faculty-container">
        {facultyMembers.slice(0, visibleCount).map((member, index) => (
          <div className="faculty-card" key={index}>
            <img
              src={member.image}
              alt={`Portrait of ${member.name}`}
              className="faculty-image"
            />
            <h3
              className="faculty-name"
              onClick={() => navigate(`/faculty/${member.name}`)} // Navigate to detail page
              style={{ cursor: 'pointer', color: 'blue' }}
            >
              {member.name}
            </h3>
            <p className="faculty-position">{member.position}</p>
            <p className="faculty-bio">{member.bio}</p>
          </div>
        ))}
      </div>
      {visibleCount < facultyMembers.length && (
        <button className="show-more-btn" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </section>
  );
};

export default Faculty;
