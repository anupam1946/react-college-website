// // OurCourses.js
// import React, { useState } from 'react';
// import './OurCourses.css';

// const courses = [
//     {
//         id: 1,
//         title: 'Ten Plus Two (+2) Science',
//         board: 'National Examinations Board',
//         duration: '2 years',
//         description: 'This course covers various scientific disciplines including Physics, Chemistry, and Biology, providing a solid foundation for further studies in science-related fields.'
//     },
//     {
//         id: 2,
//         title: 'Ten Plus Two (+2) Management',
//         board: 'National Examinations Board',
//         duration: '2 years',
//         description: 'This course equips students with essential management skills, covering areas such as marketing, finance, and human resources.'
//     }
// ];

// const OurCourses = () => {
//     const [selectedCourse, setSelectedCourse] = useState(null);
//     const [showForm, setShowForm] = useState(false);
//     const [formData, setFormData] = useState({ name: '', email: '', contact: '', question: '' });

//     const handleEnrollClick = (course) => {
//         setSelectedCourse(course);
//         setShowForm(false); // Reset the form visibility when selecting a new course
//     };

//     const handleFormChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert('Form submitted!'); // Replace with actual logic
//         setShowForm(false); // Hide the form after submission
//     };

//     const handleEnrollNowClick = (e) => {
//         e.stopPropagation(); // Prevent event from bubbling up
//         setShowForm(true);
//     };

//     return (
//         <div className="our-courses">
//             <h1>Our Courses</h1>
//             {courses.map((course) => (
//                 <div key={course.id} className="course-card" onClick={() => handleEnrollClick(course)}>
//                     <h2>{course.title}</h2>
//                     <p>{course.board}</p>
//                     <p>{course.duration}</p>
//                     {selectedCourse?.id === course.id && (
//                         <div className="course-details">
//                             <p>{course.description}</p>
//                             <button onClick={handleEnrollNowClick}>Enroll Now</button>
//                         </div>
//                     )}
//                 </div>
//             ))}
//             {showForm && (
//                 <div className="enrollment-form">
//                     <h3>Enrollment Form</h3>
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Name"
//                             value={formData.name}
//                             onChange={handleFormChange}
//                             required
//                         />
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             value={formData.email}
//                             onChange={handleFormChange}
//                             required
//                         />
//                         <input
//                             type="text"
//                             name="contact"
//                             placeholder="Contact Number"
//                             value={formData.contact}
//                             onChange={handleFormChange}
//                             required
//                         />
//                         <textarea
//                             name="question"
//                             placeholder="Any Questions?"
//                             value={formData.question}
//                             onChange={handleFormChange}
//                         />
//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default OurCourses;

// import React, { useState } from 'react';
// import './OurCourses.css';

// const courses = [
//     {
//         id: 1,
//         title: 'Ten Plus Two (+2) Science',
//         board: 'National Examinations Board',
//         duration: '2 years',
//         description: 'This course covers various scientific disciplines including Physics, Chemistry, and Biology, providing a solid foundation for further studies in science-related fields.'
//     },
//     {
//         id: 2,
//         title: 'Ten Plus Two (+2) Management',
//         board: 'National Examinations Board',
//         duration: '2 years',
//         description: 'This course equips students with essential management skills, covering areas such as marketing, finance, and human resources.'
//     }
// ];

// const OurCourses = () => {
//     const [selectedCourse, setSelectedCourse] = useState(null);
//     const [showForm, setShowForm] = useState({ science: false, management: false });
//     const [formData, setFormData] = useState({ name: '', email: '', contact: '', question: '' });

//     const handleEnrollClick = (course) => {
//         setSelectedCourse(course);
//         setShowForm({ science: false, management: false }); // Reset the form visibility when selecting a new course
//     };

//     const handleFormChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         alert('Alisha you submit form successfully!');
//         setFormData({name:'', email:'', contact:'', question:''}); // Replace with actual logic
//         setShowForm({ science: false, management: false }); // Hide the form after submission
//     };

//     const handleEnrollNowClick = (courseId, e) => {
//         e.stopPropagation(); // Prevent event from bubbling up
//         if (courseId === 1) {
//             setShowForm({ science: true, management: false });
//         } else if (courseId === 2) {
//             setShowForm({ science: false, management: true });
//         }
//     };

//     return (
//         <div className="our-courses">
//             <h1>Our Courses</h1>
//             {courses.map((course) => (
//                 <div key={course.id} className="course-card" onClick={() => handleEnrollClick(course)}>
//                     <h2>{course.title}</h2>
//                     <p>{course.board}</p>
//                     <p>{course.duration}</p>
//                     {selectedCourse?.id === course.id && (
//                         <div className="course-details">
//                             <p>{course.description}</p>
//                             <button onClick={(e) => handleEnrollNowClick(course.id, e)}>Enroll Now</button>
//                         </div>
//                     )}
//                 </div>
//             ))}

//             {/* Form for Science Course */}
//             {showForm.science && (
//                 <div className="enrollment-form science-form">
//                     <h3>Enrollment Form for Ten Plus Two (+2) Science</h3>
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Name"
//                             value={formData.name}
//                             onChange={handleFormChange}
//                             required
//                         />
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             value={formData.email}
//                             onChange={handleFormChange}
//                             required
//                         />
//                         <input
//                             type="text"
//                             name="contact"
//                             placeholder="Contact Number"
//                             value={formData.contact}
//                             onChange={handleFormChange}
//                             required
//                         />
//                         <textarea
//                             name="question"
//                             placeholder="Any Questions?"
//                             value={formData.question}
//                             onChange={handleFormChange}
//                         />
//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>
//             )}

//             {/* Form for Management Course */}
//             {showForm.management && (
//                 <div className="enrollment-form management-form">
//                     <h3>Enrollment Form for Ten Plus Two (+2) Management</h3>
//                     <form onSubmit={handleSubmit}>
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Name"
//                             value={formData.name}
//                             onChange={handleFormChange}
//                             required
//                         />
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Email"
//                             value={formData.email}
//                             onChange={handleFormChange}
//                             required
//                         />
//                         <input
//                             type="text"
//                             name="contact"
//                             placeholder="Contact Number"
//                             value={formData.contact}
//                             onChange={handleFormChange}
//                             required
//                         />
//                         <textarea
//                             name="question"
//                             placeholder="Any Questions?"
//                             value={formData.question}
//                             onChange={handleFormChange}
//                         />
//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default OurCourses;
import React, { useState } from 'react';
import './OurCourses.css';

const courses = [
    {
        id: 1,
        title: 'Ten Plus Two (+2) Science',
        board: 'National Examinations Board',
        duration: '2 years',
        description: 'This course covers various scientific disciplines including Physics, Chemistry, and Biology, providing a solid foundation for further studies in science-related fields.'
    },
    {
        id: 2,
        title: 'Ten Plus Two (+2) Management',
        board: 'National Examinations Board',
        duration: '2 years',
        description: 'This course equips students with essential management skills, covering areas such as marketing, finance, and human resources.'
    }
];

const OurCourses = () => {
    const [selectedCourseId, setSelectedCourseId] = useState(null); // Track the selected course by ID
    const [formData, setFormData] = useState({ name: '', email: '', contact: '', question: '' });
    const [openFormId, setOpenFormId] = useState(null); // Track which form to open (by course ID)

    const handleCourseClick = (courseId) => {
        // Only toggle course details (don't reset the form visibility)
        setSelectedCourseId(selectedCourseId === courseId ? null : courseId);
    };

    const handleFormChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('You have successfully submitted the form!');
        setFormData({ name: '', email: '', contact: '', question: '' }); // Reset the form after submission
        setOpenFormId(null); // Hide the form after submission
    };

    const handleEnrollNowClick = (courseId, e) => {
        e.stopPropagation(); // Prevent event from bubbling up to the course card click
        setOpenFormId(openFormId === courseId ? null : courseId); // Toggle form visibility for the clicked course
    };

    return (
        <div className="our-courses">
            <h1>Our Courses</h1>
            {courses.map((course) => (
                <div key={course.id} className="course-card">
                    <h2 onClick={() => handleCourseClick(course.id)}>{course.title}</h2>
                    <p>{course.board}</p>
                    <p>{course.duration}</p>
                    {selectedCourseId === course.id && (
                        <div className="course-details">
                            <p>{course.description}</p>
                            <button onClick={(e) => handleEnrollNowClick(course.id, e)}>Enroll Now</button>

                            {/* Render the form conditionally below each course */}
                            {openFormId === course.id && (
                                <div className={`enrollment-form ${course.id === 1 ? 'science-form' : 'management-form'}`}
                                    onClick={(e) => e.stopPropagation()} // Prevent click from reaching the course card
                                >
                                    <h3>Enrollment Form for {course.title}</h3>
                                    <form onSubmit={handleSubmit}>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Name"
                                            value={formData.name}
                                            onChange={handleFormChange}
                                            required
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            value={formData.email}
                                            onChange={handleFormChange}
                                            required
                                        />
                                        <input
                                            type="text"
                                            name="contact"
                                            placeholder="Contact Number"
                                            value={formData.contact}
                                            onChange={handleFormChange}
                                            required
                                        />
                                        <textarea
                                            name="question"
                                            placeholder="Any Questions?"
                                            value={formData.question}
                                            onChange={handleFormChange}
                                        />
                                        <button type="submit">Submit</button>
                                    </form>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default OurCourses;



