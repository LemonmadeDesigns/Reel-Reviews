import React from 'react';
import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types'; // Import PropTypes

const ChatRoomLink = ({ handleClose }) => {
  return (
    <Nav.Link
      as="a"
      href="https://brdg2connect.org"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClose}
    >
      Chat Room
    </Nav.Link>
  );
};

// Define prop types
ChatRoomLink.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default ChatRoomLink;
