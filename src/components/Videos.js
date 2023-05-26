//Only Draft not working yet

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Videos = () => {
  const [showErrorModal, setShowErrorModal] = useState(false);

  //Using original key
  const handleSearch = () => {
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Video failed to load.");
        }

        return response.json();
      })
      .then((data) => {
      })
      .catch((error) => {
        setShowErrorModal(true);
      });
  };

      // This allows the user to try searching for videos again.
  const handleCloseErrorModal = () => {
    setShowErrorModal(false);
    handleSearch();
  };

  return (
    <div>
      <button onClick={handleSearch}>Search</button>

      {showErrorModal && (
        <Modal show={true} onHide={handleCloseErrorModal}>
          <Modal.Header closeButton>
            <Modal.Title>Error</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Video failed to load. Please try again.</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleCloseErrorModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </div>
  );
};

export default Videos;
