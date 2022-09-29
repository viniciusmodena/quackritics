import { FaTrashAlt } from "react-icons/fa";
import { MdCloseFullscreen } from "react-icons/md";
import { useState } from "react";

import {
  Button,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "./styles";

const DeleteButton = ({ request, id, topicId }) => {
  const [isOpen, setIsOpen] = useState(false);

    const handleDelete = () => {
    request(id);
       setIsOpen(false);
     };

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <Button onClick={openModal}>
        <FaTrashAlt />
      </Button>
      {isOpen && (
        <ModalOverlay>
          <Modal>
            <ModalHeader>
              <button onClick={closeModal}>
                <MdCloseFullscreen />
              </button>
            </ModalHeader>
            <ModalBody>
              <h2>Are you sure you want to delete this comment?</h2>
            </ModalBody>
            <ModalFooter>
              <button className="confirm-button" onClick={handleDelete}>
                Yes
              </button>
              <button className="cancel-button" onClick={closeModal}>
                No
              </button>
            </ModalFooter>
          </Modal>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default DeleteButton;
