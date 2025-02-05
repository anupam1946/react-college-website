// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css'; // External CSS for header styles

// const Header = () => {
//   return (
//     <header className="header">
//       <h1 style={{ textTransform: 'capitalize' }}>Sunshine English Boarding High School</h1>
//       <nav>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About Us</Link></li>
//           <li><Link to="/courses">Courses</Link></li>
//           <li><Link to="/departments">Departments</Link></li>
//           <li><Link to="/faculty">Faculty</Link></li>
//           <li><Link to="/gallery">Gallery</Link></li>
//           <li><Link to="/admissions">Admissions</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
        
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;


// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import './Header.css'; // External CSS for header styles

// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false); // Track if the navbar is open on small screens

//   const toggleNavbar = () => {
//     setIsOpen(!isOpen); // Toggle the state between true and false
//   };

//   // Close the navbar if the screen size is larger than 768px
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 768) {
//         setIsOpen(false); // Close the navbar on desktop view
//       }
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup the event listener on component unmount
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return (
//     <header className="header">
//       <h1 style={{ textTransform: 'capitalize' }}>Sunshine English Boarding High School</h1>

//       {/* Menu Icon that toggles navbar */}
//       <button className="menu-icon" onClick={toggleNavbar}>
//         {isOpen ? '\u00D7' : '\u2630'} {/* Show close icon (×) when open, hamburger (☰) when closed */}
//       </button>

//       {/* Navigation: Conditionally add class 'nav-open' based on 'isOpen' */}
//       <nav className={isOpen ? 'nav-open' : ''}>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About Us</Link></li>
//           <li><Link to="/courses">Courses</Link></li>
//           <li><Link to="/departments">Departments</Link></li>
//           <li><Link to="/faculty">Faculty</Link></li>
//           <li><Link to="/gallery">Gallery</Link></li>
//           <li><Link to="/admissions">Admissions</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Header;

import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // External CSS for header styles
import logo from '../../assets/logo.jpg'; // Replace with your logo path
import underline from '../../assets/nav_underline.svg'; // Replace with your underline image path
import menu_open from '../../assets/menu_open.svg'; // Replace with your hamburger icon path
import menu_close from '../../assets/menu_close.svg'; // Replace with your close icon path

const Header = () => {
  const [menu, setMenu] = useState("home"); // Track the current menu item
  const menuRef = useRef(); // Reference for the menu

  const openMenu = () => {
    menuRef.current.style.right = "0"; // Show menu
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px"; // Hide menu
  };

  // Close the menu if the screen size is larger than 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        menuRef.current.style.right = "-350px"; // Close the menu on desktop view
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className="header">
         <div className="header-content">
            <h1 style={{ textTransform: 'capitalize' }}>Sunshine English</h1>
            <img src={logo} alt="School Logo" className="logo" />
            <h1 style={{ textTransform: 'capitalize' }}> Boarding High School</h1>
        </div>

      {/* Mobile Menu Icon */}
      <img src={menu_open} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />

      {/* Navigation for Desktop */}
      <nav className="nav-desktop">
        <ul>
          <li>
            <Link to="/" onClick={() => { setMenu("home"); }}>
              Home
              {menu === "home" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => { setMenu("about"); }}>
              About Us
              {menu === "about" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
          <li>
            <Link to="/courses" onClick={() => { setMenu("courses"); }}>
              Courses
              {menu === "courses" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
          <li>
            <Link to="/departments" onClick={() => { setMenu("departments"); }}>
              Departments
              {menu === "departments" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
          <li>
            <Link to="/faculty" onClick={() => { setMenu("faculty"); }}>
              Faculty
              {menu === "faculty" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => { setMenu("gallery"); }}>
              Gallery
              {menu === "gallery" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
          <li>
            <Link to="/admissions" onClick={() => { setMenu("admissions"); }}>
              Admissions
              {menu === "admissions" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => { setMenu("contact"); }}>
              Contact
              {menu === "contact" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
          <li>
            <Link to="/loginsignup" onClick={() => { setMenu("loginsignup"); }}>
              login/signup
              {menu === "loginsignup" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav>
        <ul ref={menuRef} className="nav-menu">
          <img src={menu_close} onClick={closeMenu} alt="Close Menu" className="nav-mob-close" />
          {/* The same menu items here for mobile */}
          <li>
            <Link to="/" onClick={() => { setMenu("home"); closeMenu(); }}>
              Home
              {menu === "home" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => { setMenu("about"); closeMenu(); }}>
              About Us
              {menu === "about" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
          <li>
            <Link to="/courses" onClick={() => { setMenu("courses"); closeMenu(); }}>
              Courses
              {menu === "courses" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
          <li>
            <Link to="/departments" onClick={() => { setMenu("departments"); closeMenu(); }}>
              Departments
              {menu === "departments" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
          <li>
            <Link to="/faculty" onClick={() => { setMenu("faculty"); closeMenu(); }}>
              Faculty
              {menu === "faculty" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => { setMenu("gallery"); closeMenu(); }}>
              Gallery
              {menu === "gallery" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
          <li>
            <Link to="/admissions" onClick={() => { setMenu("admissions"); closeMenu(); }}>
              Admissions
              {menu === "admissions" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => { setMenu("contact"); closeMenu(); }}>
              Contact
              {menu === "contact" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
          <li>
            <Link to="/loginsignup" onClick={() => { setMenu("loginsignup"); closeMenu(); }}>
              login/signup
              {menu === "loginsignup" ? <img src={underline} alt="Underline" /> : null}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
