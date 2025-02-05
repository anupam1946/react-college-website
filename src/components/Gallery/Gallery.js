
// import React, {useState} from 'react';
// import './Gallery.css';
// import image1 from '../../assets/image1.jpg';
// import image2 from '../../assets/image2.jpg';
// import image3 from '../../assets/image3.jpg';
// import image4 from '../../assets/image4.jpg';
// import image5 from '../../assets/image5.jpg';
// import image6 from '../../assets/image6.jpg';
// import image7 from '../../assets/image7.jpg';
// import image8 from '../../assets/image8.jpg';
// import image9 from '../../assets/image9.jpg';
// import image10 from '../../assets/image10.jpg';
// import image11 from '../../assets/image11.jpg';
// import image12 from '../../assets/image12.jpg';


// const Gallery = () => {

//     const initialImages = [
//         { id: 1, src: image1, alt: 'Image 1' },
//         { id: 2, src: image2, alt: 'Image 2' },
//         { id: 3, src: image3, alt: 'Image 3' },
//         { id: 4, src: image4, alt: 'Image 4' },
//         { id: 5, src: image5, alt: 'Image 5' },
//         { id: 6, src: image6, alt: 'Image 6' },
//       ];
    
//       const additionalImages = [
//         { id: 7, src: image7, alt: 'Image 7' },
//         { id: 8, src: image8, alt: 'Image 8' },
//         { id: 9, src: image9, alt: 'Image 9' },
//         { id: 10, src: image10, alt: 'Image 10' },
//         { id: 11, src: image11, alt: 'Image 11' },
//         { id: 12, src: image12, alt: 'Image 12' },
//       ];
    
//       const [images, setImages] = useState(initialImages);
//       const [showMore, setShowMore] = useState(false);
    
//       const handleSeeMore = () => {
//         setImages([...images, ...additionalImages]);
//         setShowMore(false);
//       };
//   return (
//     <div className="gallery-container">
//     <h1>Gallery</h1>
//     <div className="gallery">
//       {images.map((image) => (
//         <div key={image.id} className="gallery-item">
//           <img src={image.src} alt={image.alt} />
//         </div>
//       ))}
//     </div>
//     {!showMore && (
//       <button className="see-more" onClick={() => setShowMore(true)}>
//         See More
//       </button>
//     )}
//     {showMore && (
//       <button className="load-more" onClick={handleSeeMore}>
//         Load More Images
//       </button>
//     )}
//   </div>
//   );
// };

// export default Gallery
// import React, { useState } from 'react';
// import './Gallery.css';
// import Modal from '../Modal/Modal';
// import image1 from '../../assets/image1.jpg';
// import image2 from '../../assets/image2.jpg';
// import image3 from '../../assets/image3.jpg';
// import image4 from '../../assets/image4.jpg';
// import image5 from '../../assets/image5.jpg';
// import image6 from '../../assets/image6.jpg';
// import image7 from '../../assets/image7.jpg';
// import image8 from '../../assets/image8.jpg';
// import image9 from '../../assets/image9.jpg';
// import image10 from '../../assets/image10.jpg';
// import image11 from '../../assets/image11.jpg';
// import image12 from '../../assets/image12.jpg';

// const Gallery = () => {
//     const initialImages = [
//         { id: 1, src: image1, alt: 'Image 1' },
//         { id: 2, src: image2, alt: 'Image 2' },
//         { id: 3, src: image3, alt: 'Image 3' },
//         { id: 4, src: image4, alt: 'Image 4' },
//         { id: 5, src: image5, alt: 'Image 5' },
//         { id: 6, src: image6, alt: 'Image 6' },
//     ];

//     const additionalImages = [
//         { id: 7, src: image7, alt: 'Image 7' },
//         { id: 8, src: image8, alt: 'Image 8' },
//         { id: 9, src: image9, alt: 'Image 9' },
//         { id: 10, src: image10, alt: 'Image 10' },
//         { id: 11, src: image11, alt: 'Image 11' },
//         { id: 12, src: image12, alt: 'Image 12' },
//     ];

//     const [images, setImages] = useState(initialImages);
//     const [showMore, setShowMore] = useState(false);

//     const handleSeeMore = () => {
//         setImages([...initialImages, ...additionalImages]);
//         setShowMore(true);
//     };

//     const handleShowLess = () => {
//         setImages(initialImages);
//         setShowMore(false);
//     };

//     return (
//         <div className="gallery-container">
//             <h1>Gallery</h1>
//             <div className="gallery">
//                 {images.map((image) => (
//                     <div key={image.id} className="gallery-item">
//                         <img src={image.src} alt={image.alt} />
//                     </div>
//                 ))}
//             </div>
//             {!showMore && (
//                 <button className="see-more" onClick={handleSeeMore}>
//                     See More
//                 </button>
//             )}
//             {showMore && (
//                 <>
//                     <button className="load-more" onClick={handleShowLess}>
//                         Show Less
//                     </button>
//                 </>
//             )}
//         </div>
//     );
// };

// export default Gallery;

import React, { useState } from 'react';
import './Gallery.css';
import Modal from '../Modal/Modal';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';
import image4 from '../../assets/image4.jpg';
import image5 from '../../assets/image5.jpg';
import image6 from '../../assets/image6.jpg';
import image7 from '../../assets/image7.jpg';
import image8 from '../../assets/image8.jpg';
import image9 from '../../assets/image9.jpg';
import image10 from '../../assets/image10.jpg';
import image11 from '../../assets/image11.jpg';
import image12 from '../../assets/image12.jpg';

const Gallery = () => {
    const initialImages = [
        { id: 1, src: image1, alt: 'Image 1' },
        { id: 2, src: image2, alt: 'Image 2' },
        { id: 3, src: image3, alt: 'Image 3' },
        { id: 4, src: image4, alt: 'Image 4' },
        { id: 5, src: image5, alt: 'Image 5' },
        { id: 6, src: image6, alt: 'Image 6' },
    ];

    const additionalImages = [
        { id: 7, src: image7, alt: 'Image 7' },
        { id: 8, src: image8, alt: 'Image 8' },
        { id: 9, src: image9, alt: 'Image 9' },
        { id: 10, src: image10, alt: 'Image 10' },
        { id: 11, src: image11, alt: 'Image 11' },
        { id: 12, src: image12, alt: 'Image 12' },
    ];

    const [images, setImages] = useState(initialImages);
    const [showMore, setShowMore] = useState(false);

    // State to control the modal
    const [modalOpen, setModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const handleSeeMore = () => {
        setImages([...initialImages, ...additionalImages]);
        setShowMore(true);
    };

    const handleShowLess = () => {
        setImages(initialImages);
        setShowMore(false);
    };

    const openModal = (image) => {
        setCurrentImage(image);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
        setCurrentImage(null);
    };

    return (
        <div className="gallery-container">
            <h1>Gallery</h1>
            <div className="gallery">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className="gallery-item"
                        onClick={() => openModal(image)} // Open modal when image is clicked
                    >
                        <img src={image.src} alt={image.alt} />
                    </div>
                ))}
            </div>
            {!showMore && (
                <button className="see-more" onClick={handleSeeMore}>
                    See More
                </button>
            )}
            {showMore && (
                <>
                    <button className="load-more" onClick={handleShowLess}>
                        Show Less
                    </button>
                </>
            )}

            {/* Render the Modal */}
            {modalOpen && (
                <Modal
                    isOpen={modalOpen}
                    onClose={closeModal}
                    imageSrc={currentImage?.src}
                    imageAlt={currentImage?.alt}
                />
            )}
        </div>
    );
};

export default Gallery;

