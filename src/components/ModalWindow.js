import React from 'react';

const ModalWindow = ({ closeModal }) => {
  const handleCloseModal = () => {
    closeModal();
  };

  return (
    <div className="-modal-window">
      <div className="modal-content">
        <h3>ModalWindow</h3>
        <p>Error: - Unable to load video, please try again.</p>
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
