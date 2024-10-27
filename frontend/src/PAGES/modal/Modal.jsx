import React, { useEffect, useRef } from 'react';
import './modal.css'; //

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  //this will Handle key down event for escape key
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      onClose();
    }
  };

  // while here Handle click outside the modal
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Set focus to the modal when it opens
      modalRef.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null; // Don't render if modal is not open

  return (
    <div className="modal-backdrop" onClick={handleClickOutside}>
      <div 
        className="modal-content" 
        ref={modalRef} 
        tabIndex={0} // Makes the div focusable
        onKeyDown={handleKeyDown} // Handle key down events
      >
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
