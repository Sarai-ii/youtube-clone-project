import React from 'react';
import './ModalWindow.css';

const ModalWindow = ({ closeModal }) => {
  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div className="-modal-window">
      <div className="modal-content">
        <h3>Error </h3>
        <p>Unable to load video, please try again.</p>
        <button className="close-button" onClick={handleCloseModal}>
          X
        </button>
        <button className="try-again-button" onClick={handleCloseModal}>
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ModalWindow;
