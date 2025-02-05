import React from 'react'

import './Modal.css'; // Create this CSS file for modal styles

const Modal = ({ isOpen, onClose, imageSrc, imageAlt }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={imageSrc} alt={imageAlt} className="modal-image" />
                <button className="modal-close" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
