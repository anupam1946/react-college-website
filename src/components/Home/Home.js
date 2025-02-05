

// function Home() {
//   return (
//     <section id="home">
//       <h2>Welcome to Our College</h2>
//       <img src="" style={{ width: "100%", height: "100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat", backgroundPosition: "center" }} alt="" />
//       <p>
//         Our college is dedicated to providing high-quality education and fostering academic excellence.
//       </p>
//       <p>
//         Join us to explore various opportunities and pathways for your educational journey.
//       </p>
//     </section>
//   );
// }

// export default Home;
import React, { useState, useEffect } from 'react';
import image13 from '../../assets/image13.jpg'; // Adjust the path as necessary
import image14 from '../../assets/image14.jpg';
import image15 from '../../assets/image15.jpg';
import image16 from '../../assets/image16.jpg';
import image17 from '../../assets/image17.jpg';
import image18 from '../../assets/image18.jpg';
import image19 from '../../assets/image19.jpg';
import './Home.css'; // Use an external CSS file for media queries

function Home() {
  // Array of imported images
  const images = [
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Function to update image index every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <section id="home" className="home-section">
      <h2 className="home-title">Welcome to Our College</h2>
      
      {/* Background Image Slider */}
      <img
        src={images[currentImageIndex]} // Image changes based on the current index
        className="home-background-image"
        alt={`Slide ${currentImageIndex + 1}`}
      />

      <div className="home-content">
        <p>
          Our college is dedicated to providing high-quality education and fostering academic excellence.
        </p>
        <p>
          Join us to explore various opportunities and pathways for your educational journey.
        </p>
      </div>
    </section>
  );
}

export default Home;
/*
const[currentImageIndex, setCurrentImageIndex] = useState(0);

useEffect(()=>{
  const interval = setInterval(()=>{
    setCurrentImageIndex((prevIndex)=>(prevIndex+1)%images.length);},3000);
    return ()=>clearInterval(interval);

  },[images.length]);

  img src={imsges[currentImageIndex]} className = "home-background-image" alt={`slide ${currentImageIndex+1}`}


  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentImageIndex((prevIndex)=>(prevIndex+1)%images.length);},3000);
      return()=>clearInterval(interval);
    },[images.length]);

    img src={images[currentImageIndex]} className ="home-background-image" alt={`slide ${currentImageIndex+1}`}

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(()=>{
      const interval = setInterval(()=>{
        setCurrentImageIndex((prevIndex)=>(prevIndex+1)%images.length);)3000,
        return(=>clearInterval(interval);)[images.length]})
*/
