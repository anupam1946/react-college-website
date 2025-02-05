// // Footer.js
// import React from 'react';
// import './Footer.css'; // Import the CSS for styling

// const Footer = () => {
//     return (
//         <footer className="footer">
//             <div className="footer-column">
//                 <h3>About College</h3>
//                 <p>ISMT was established in 2011 with a mission to deliver internationally recognized qualifications.</p>
//                 <a href="/about" className="view-more">View More</a>
//             </div>
//             <div className="footer-column">
//                 <h3>Our Courses</h3>
//                 <ul>
//                     <li>Bachelor of Science in Computer Science</li>
//                     <li>Bachelor of Arts in Business Administration</li>
//                     <li>+2 level science</li>
//                     <li>+2 lavel commerce</li>
//                     <li>Grade 1-10 excellent education</li>
//                     <li>+2 computer science</li>
//                 </ul>
//             </div>
//             <div className="footer-column">
//                 <h3>Get in Touch</h3>
//                 <p>Email: info@college.edu</p>
//                 <p>Phone: (123) 456-7890</p>
//                 <p>Address: 123 College St, City, Country</p>
//             </div>
//             <div className="footer-column">
//                 <h3>Virtual Tour</h3>
//                 <video controls>
//                     <source src="virtual-tour.mp4" type="video/mp4" />
//                     Your browser does not support the video tag.
//                 </video>
//             </div>
//         </footer>
//     );
// };

// export default Footer;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Footer.css'; // Import the CSS for styling

const Footer = () => {
    const navigate = useNavigate(); // Initialize the navigate function
    const [isViewingMore, setIsViewingMore] = useState(false); // State to track view status

    const handleViewMore = () => {
        setIsViewingMore(true); // Set state to true
        navigate('/about'); // Redirect to About Us page
    };

    const handleViewLess = () => {
        setIsViewingMore(false); // Set state to false
        navigate('/'); // Redirect back to the home page
    };

    return (
        <footer className="footer">
            <div className="footer-column">
                <h3>About College</h3>
                <p>
                    college was established in 2011 with a mission to deliver internationally recognized qualifications.
                </p>
                <button onClick={handleViewMore} className="view-more">
                    {isViewingMore ? 'View Less' : 'View More'}
                </button>
                {isViewingMore && (
                    <div className="additional-content">
                        <p>Our college offers a wide range of programs designed to help students succeed in their careers.</p>
                        <p>We focus on providing quality education and developing practical skills.</p>
                        <button onClick={handleViewLess} className="view-less">
                            View Less
                        </button>
                    </div>
                )}
            </div>
            <div className="footer-column">
                <h3>Our Courses</h3>
                <ul>
                    <li>Bachelor of Science in Computer Science</li>
                    <li>Bachelor of Arts in Business Administration</li>
                    <li>+2 level science</li>
                    <li>+2 level commerce</li>
                    <li>Grade 1-10 excellent education</li>
                    <li>+2 computer science</li>
                </ul>
            </div>
            <div className="footer-column">
                <h3>Get in Touch</h3>
                <p>Email: info@college.edu</p>
                <p>Phone: (123) 456-7890</p>
                <p>Address: 123 College St, City, Country</p>
            </div>
            <div className="footer-column">
                <h3>Virtual Tour</h3>
    <iframe
        width="100%" 
        height="300" 
        src="https://www.youtube.com/embed/DMYeZe7JTNE" 
        title="Virtual Tour"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
    ></iframe>
            </div>
        </footer>
    );
};

export default Footer;

