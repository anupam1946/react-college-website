// AboutUs.js
import React, { useEffect, useState } from 'react';
import './AboutUs.css';
import college1 from '../../assets/college1.jpg';
import college2 from '../../assets/college2.jpg';
import college3 from '../../assets/college3.jpg';

const AboutUs = () => {
    const images = [
        college1, // Replace with your image URLs
        college2,
        college3
    ];
    
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="about-us">
            <h1>About Us</h1>
            
            <div className="image-carousel">
                <img src={images[currentImage]} alt="College" />
            </div>

            <section className="mission">
                <h2>Our Mission</h2>
                <p>
                    At [sunshine secondary school], our mission is to foster academic excellence, promote personal growth, and prepare our students for successful careers in a rapidly changing world. We are committed to creating a vibrant and inclusive learning environment that encourages innovation, critical thinking, and lifelong learning.
                </p>
            </section>
            
            <section className="vision">
                <h2>Our Vision</h2>
                <p>
                    We envision a world where education empowers individuals to make meaningful contributions to society. Our goal is to be a leading institution that inspires students to achieve their highest potential, develop their skills, and embrace diverse perspectives.
                </p>
            </section>
            
            <section className="history">
                <h2>Our History</h2>
                <p>
                    Founded in [Year], [College Name] has a rich history of academic achievement and community engagement. Over the years, we have evolved to meet the needs of our students and the demands of the global workforce. Our dedication to quality education and student success has established us as a trusted institution in [Location].
                </p>
            </section>
            
            <section className="values">
                <h2>Our Values</h2>
                <ul>
                    <li><strong>Integrity:</strong> We uphold the highest standards of ethical behavior and academic honesty.</li>
                    <li><strong>Excellence:</strong> We strive for excellence in all aspects of education, research, and community service.</li>
                    <li><strong>Inclusivity:</strong> We celebrate diversity and create an inclusive environment for all students, faculty, and staff.</li>
                    <li><strong>Collaboration:</strong> We believe in the power of teamwork and collaboration to achieve our goals.</li>
                    <li><strong>Innovation:</strong> We embrace change and encourage innovative thinking to address contemporary challenges.</li>
                </ul>
            </section>

            <section className="academic-programs">
                <h2>Academic Programs</h2>
                <p>
                    [sunshine secondary school] offers a diverse range of academic programs designed to meet the interests and career aspirations of our students. Our departments include:
                </p>
                <ul>
                    <li>Business Administration</li>
                    <li>Computer Science</li>
                    <li>Engineering</li>
                    <li>Health Sciences</li>
                    <li>Arts and Humanities</li>
                    <li>Social Sciences</li>
                </ul>
            </section>
            
            <section className="campus-life">
                <h2>Campus Life</h2>
                <p>
                    Life at [life at sunshine secondary school] extends beyond the classroom. We offer a vibrant campus culture with numerous extracurricular activities, including clubs, organizations, and events. Our students have access to:
                </p>
                <ul>
                    <li>State-of-the-art facilities</li>
                    <li>Libraries and research centers</li>
                    <li>Sports and recreational activities</li>
                    <li>Cultural and artistic events</li>
                </ul>
            </section>
            
            <section className="get-involved">
                <h2>Get Involved</h2>
                <p>
                    We encourage our students to get involved in campus life, engage with the community, and take advantage of the numerous opportunities available at [sunshine secondary school]. Whether through internships, volunteer work, or student organizations, there are countless ways to make a positive impact.
                </p>
            </section>
            
            <section className="contact-us">
                <h2>Contact Us</h2>
                <p>If you have any questions or would like to schedule a visit, please reach out to us at:</p>
                <p>Email: <a href="mailto:someone@gmail.com">someone@college.edu</a></p>
                <p>Phone: +977-9823452542</p>
                <p>Address: siddharthanagar-9, bhanupath,bhairahwa</p>
            </section>

            <p className="join-us">Join us at [Sunshine academic school] and become part of a community dedicated to excellence, growth, and innovation.</p>
        </div>
    );
};

export default AboutUs;
