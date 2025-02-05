// import React from "react";
// import "./Contact.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import mail_icon from "../../assets/mail_icon.svg";
// import call_icon from "../../assets/call_icon.svg";
// import location_icon from "../../assets/location_icon.svg";

// const Contact = () => {
//   return (
//     <section id="contact">
//         <div className="contact">
//         <div className="contact-title">
//           <h1>GET IN TOUCH</h1>
//           <img src={theme_pattern} alt="" />
//         </div>
//         <div className="contact-section">
//           <div className="contact-left">
//             <h1>LET'S TALK</h1>
//             <p>
//               I am available to to do any project you want. if you need me
//               contact me anytime.
//             </p>
//             <div className="contact-details">
//               <div className="contact-detail">
//                 <img src={mail_icon} alt="" />
//                 <p>someone@gmail.com</p>
//               </div>
//               <div className="contact-detail">
//                 <img src={call_icon} alt="" />
//                 <p>9812346247</p>
//               </div>
//               <div className="contact-detail">
//                 <img src={location_icon} alt="" />
//                 <p>Bhairahwa</p>
//               </div>
//             </div>
//           </div>
//           <form className="contact-right">
//             <label htmlFor="">Your Name</label>
//             <input type="text" placeholder="Enter Your Name" name="name" />
//             <label htmlFor="">Your Email</label>
//             <input type="email" placeholder="Enter Your email" name="email" />
//             <label htmlFor="">Write Your Massege Here</label>
//             <textarea
//               name="message"
//               rows="8"
//               placeholder="Enter your message"
//             ></textarea>
//             <button type="submit" className="contact-submit">
//               Submit now
//             </button>
//           </form>
//         </div>
//         </div>
//     </section>
//   );
// };

// export default Contact;
/* <h2>Contact Us</h2>
<p>Email: <a href="mailto:info@college.edu">info@college.edu</a></p>
<p>Phone: <a href="tel:+123456789">+1 (234) 567-890</a></p> */

// import React, { useState } from "react";
// import "./Contact.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import mail_icon from "../../assets/mail_icon.svg";
// import call_icon from "../../assets/call_icon.svg";
// import location_icon from "../../assets/location_icon.svg";

// const Contact = () => {

//     const onSubmit = async (event) => {
//         event.preventDefault();
//         const formData = new FormData(event.target);
    
//         formData.append("access_key", "70fec83c-4d8f-454c-a1af-6e822e09a28e");
    
//         const object = Object.fromEntries(formData);
//         const json = JSON.stringify(object);
    
//         const res = await fetch("https://api.web3forms.com/submit", {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json"
//           },
//           body: json
//         }).then((res) => res.json());
    
//         if (res.success) {
//           console.log("Success", res);
//         }
//       };

    
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Implement your form submission logic here
//     console.log('Form submitted:', formData);
//     // Clear form fields after submission if desired
//     setFormData({ name: '', email: '', message: '' });
//   };

//   return (
//     <section id="contact">
//       <div className="contact">
//         <div className="contact-title">
//           <h1>GET IN TOUCH</h1>
//           <img src={theme_pattern} alt="Theme pattern decoration" />
//         </div>
//         <div className="contact-section">
//           <div className="contact-left">
//             <h1>LET'S TALK</h1>
//             <p>
//               I am available to do any project you want. If you need me, contact me anytime.
//             </p>
//             <div className="contact-details">
//               <div className="contact-detail">
//                 <img src={mail_icon} alt="Mail icon" />
//                 <p>someone@gmail.com</p>
//               </div>
//               <div className="contact-detail">
//                 <img src={call_icon} alt="Call icon" />
//                 <p>9812346247</p>
//               </div>
//               <div className="contact-detail">
//                 <img src={location_icon} alt="Location icon" />
//                 <p>Bhairahwa</p>
//               </div>
//             </div>
//           </div>
//           <form className="contact-right" onSubmit={handleSubmit}>
//             <label htmlFor="name">Your Name</label>
//             <input 
//               type="text" 
//               id="name" 
//               placeholder="Enter Your Name" 
//               name="name" 
//               value={formData.name} 
//               onChange={handleChange} 
//               required 
//             />
//             <label htmlFor="email">Your Email</label>
//             <input 
//               type="email" 
//               id="email" 
//               placeholder="Enter Your Email" 
//               name="email" 
//               value={formData.email} 
//               onChange={handleChange} 
//               required 
//             />
//             <label htmlFor="message">Write Your Message Here</label>
//             <textarea
//               id="message"
//               name="message"
//               rows="8"
//               placeholder="Enter your message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>
//             <button type="submit" className="contact-submit">
//               Submit now
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

// import React, { useState } from "react";
// import "./Contact.css";
// import theme_pattern from "../../assets/theme_pattern.svg";
// import mail_icon from "../../assets/mail_icon.svg";
// import call_icon from "../../assets/call_icon.svg";
// import location_icon from "../../assets/location_icon.svg";

// const Contact = () => {
//   // State to hold form data
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: ''
//   });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Create a FormData object from the current form data
//     const dataToSend = new FormData();
//     dataToSend.append("access_key", "70fec83c-4d8f-454c-a1af-6e822e09a28e");
//     dataToSend.append("name", formData.name);
//     dataToSend.append("email", formData.email);
//     dataToSend.append("message", formData.message);

//     // Convert FormData to JSON for sending to the API
//     const object = Object.fromEntries(dataToSend);
//     const json = JSON.stringify(object);

//     // Send the request to the API
//     const res = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json"
//       },
//       body: json
//     });

//     // Parse the response
//     const response = await res.json();

//     if (response.success) {
//       alert(response.message);
//       // Clear the form fields after successful submission
//       setFormData({ name: '', email: '', message: '' });
//     } else {
//       console.error("Submission error", response);
//     }
//   };

//   return (
//     <section id="contact">
//       <div className="contact">
//         <div className="contact-title">
//           <h1>GET IN TOUCH</h1>
//           <img src={theme_pattern} alt="Theme pattern decoration" />
//         </div>
//         <div className="contact-section">
//           <div className="contact-left">
//             <h1>LET'S TALK</h1>
//             <p>
//               I am available to do any project you want. If you need me, contact me anytime.
//             </p>
//             <div className="contact-details">
//               <div className="contact-detail">
//                 <img src={mail_icon} alt="Mail icon" />
//                 <p>someone@gmail.com</p>
//               </div>
//               <div className="contact-detail">
//                 <img src={call_icon} alt="Call icon" />
//                 <p>9812346247</p>
//               </div>
//               <div className="contact-detail">
//                 <img src={location_icon} alt="Location icon" />
//                 <p>Bhairahwa</p>
//               </div>
//             </div>
//           </div>
//           <form className="contact-right" onSubmit={handleSubmit}>
//             <label htmlFor="name">Your Name</label>
//             <input 
//               type="text" 
//               id="name" 
//               placeholder="Enter Your Name" 
//               name="name" 
//               value={formData.name} 
//               onChange={handleChange} 
//               required 
//             />
//             <label htmlFor="email">Your Email</label>
//             <input 
//               type="email" 
//               id="email" 
//               placeholder="Enter Your Email" 
//               name="email" 
//               value={formData.email} 
//               onChange={handleChange} 
//               required 
//             />
//             <label htmlFor="message">Write Your Message Here</label>
//             <textarea
//               id="message"
//               name="message"
//               rows="8"
//               placeholder="Enter your message"
//               value={formData.message}
//               onChange={handleChange}
//               required
//             ></textarea>
//             <button type="submit" className="contact-submit">
//               Submit now
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState } from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import call_icon from "../../assets/call_icon.svg";
import location_icon from "../../assets/location_icon.svg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataToSend = new FormData();
    dataToSend.append("access_key", "70fec83c-4d8f-454c-a1af-6e822e09a28e");
    dataToSend.append("name", formData.name);
    dataToSend.append("email", formData.email);
    dataToSend.append("message", formData.message);

    const object = Object.fromEntries(dataToSend);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });

    const response = await res.json();
    if (response.success) {
      alert(response.message);
      setFormData({ name: '', email: '', message: '' });
    } else {
      console.error("Submission error", response);
    }
  };

  return (
    <section id="contact">
      <div className="contact">
        <div className="contact-title">
          <h1>GET IN TOUCH</h1>
          <img src={theme_pattern} alt="Theme pattern decoration" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>LET'S TALK</h1>
            <p>
              I am available to do any project you want. If you need me, contact me anytime.
            </p>
            <div className="contact-details">
              <div className="contact-detail">
                <img src={mail_icon} alt="Mail icon" />
                <p>someone@gmail.com</p>
              </div>
              <div className="contact-detail">
                <img src={call_icon} alt="Call icon" />
                <p>9812346247</p>
              </div>
              <div className="contact-detail">
                <img src={location_icon} alt="Location icon" />
                <p>Bhairahwa</p>
              </div>
            </div>
          </div>
          <form className="contact-right" onSubmit={handleSubmit}>
            <label htmlFor="name">Your Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Enter Your Name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <label htmlFor="email">Your Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="Enter Your Email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <label htmlFor="message">Write Your Message Here</label>
            <textarea
              id="message"
              name="message"
              rows="8"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="contact-submit">
              Submit now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
