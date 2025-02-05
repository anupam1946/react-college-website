// // src/components/Admissions.js
// import React, { useState } from 'react';
// import './Admissions.css'; // Import CSS for styling

// const Admissions = () => {
//   const [showSubMenu, setShowSubMenu] = useState(true);

//   // Toggle submenu visibility
//   const toggleSubMenu = () => {
//     setShowSubMenu(!showSubMenu);
//   };

//   return (
//     <section id="admissions">
//       <h2 onClick={toggleSubMenu} className="admissions-header">Admissions</h2>
//       <p>
//         We are excited to welcome new students! For more information on our admissions process, please explore the options below.
//       </p>

//       {/* Submenu items with conditional rendering */}
//       {showSubMenu && (
//         <div className="submenu-container">
//           <div className="submenu-item">
//             <h3>Admissions Requirements</h3>
//             <p>Learn about the qualifications and documents required for admission.</p>
//           </div>
//           <div className="submenu-item">
//             <h3>Application Form</h3>
//             <p>Complete the online application to get started with your admission.</p>
//           </div>
//           <div className="submenu-item">
//             <h3>Student Code of Conduct</h3>
//             <p>Understand our policies and guidelines for a positive learning environment.</p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Admissions;

import React from 'react';
import ProgramList from './ProgramList';
import FAQs from './FAQs';
import Testimonial from './Testimonial';
import ContactForm from '../Shared/ContactForm';
import FeeStructure from '../Shared/FeeStructure'
import "./Admissions.css";


const Admissions = () => {
  return (
    <div className="admissions-page">
      <section id="overview" className="section">
        <h1>Admissions Overview</h1>
        <p>Welcome to our college! Learn about our admissions process and start your journey today.</p>
        <div className="cta-buttons">
          <button className="cta-btn">Apply Now</button>
          <button className="cta-btn">Schedule a Visit</button>
          <button className="cta-btn">Request Information</button>
        </div>
      </section>

      <section id="eligibility" className="section">
        <h2>Eligibility Criteria</h2>
        <p>Understand the requirements for undergraduate, postgraduate, and specialized programs:</p>
        <ul>
          <li>Academic qualifications</li>
          <li>Entrance tests</li>
          <li>Additional requirements for specific programs</li>
        </ul>
      </section>

      <section id="programs" className="section">
        <h2>Programs Offered</h2>
        <ProgramList />
      </section>

      <section id="process" className="section">
        <h2>Admission Process</h2>
        <ol>
          <li>Submit your application online.</li>
          <li>Prepare for entrance exams.</li>
          <li>Participate in interviews (if applicable).</li>
          <li>Await results and complete enrollment.</li>
        </ol>
        <p>
          Download our <a href="/guidelines.pdf" target="_blank">admission guidelines</a> for more details.
        </p>
      </section>

      <section id="fees" className="section">
        <h2>Fee Structure</h2>
        <FeeStructure />
      </section>

      <section id="scholarships" className="section">
        <h2>Scholarships and Financial Aid</h2>
        <p>We offer a variety of scholarships to support our students. Check out the eligibility criteria and deadlines.</p>
        <ul>
          <li>Merit-based scholarships</li>
          <li>Need-based financial aid</li>
          <li>Special category scholarships</li>
        </ul>
      </section>

      <section id="contact" className="section">
        <h2>Contact Information</h2>
        <p>Have questions? Reach out to our admissions office:</p>
        <ul>
          <li>Phone: +1 234 567 890</li>
          <li>Email: admissions@college.edu</li>
          <li>Address: Bhairahawa, siddharthanagar-9 Rupandehi</li>
        </ul>
        <ContactForm />
      </section>

      <section id="faqs" className="section">
        <h2>Frequently Asked Questions</h2>
        <FAQs />
      </section>

      <section id="testimonials" className="section">
        <h2>Testimonials</h2>
        <Testimonial />
      </section>

      <section id="campus-tour" className="section">
        <h2>Campus Tour</h2>
        <p>Book a campus tour or explore our virtual tour below:</p>
        <iframe
          src="https://www.google.com/maps/embed"
          title="Virtual Campus Tour"
          width="600"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
};

export default Admissions;

