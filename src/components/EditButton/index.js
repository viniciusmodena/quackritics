import { FaEdit } from "react-icons/fa";
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
import { Commit } from "@mui/icons-material";
import { useComments } from "../../Providers/comments";

const EditButtonComponent = ({ request, comment }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [editedComment, setEditedComment] = useState(comment.comment);

  const { commentEdited, setCommentEdited } = useComments();

  const handleClick = () => {
    const editedObject = { comment: editedComment };
    request(comment.id, editedObject);
    setIsOpen(false);
    setCommentEdited(false);
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
        <FaEdit />
      </Button>

      {isOpen && (
        <ModalOverlay>
          <Modal>
            <ModalHeader>
              <h2>Edit Comment</h2>
              <button onClick={closeModal}>
                <MdCloseFullscreen />
              </button>
            </ModalHeader>
            <ModalBody>
              <textarea
                value={editedComment}
                onChange={(e) => setEditedComment(e.target.value)}
              ></textarea>
            </ModalBody>
            <ModalFooter>
              <button className="confirm-button" onClick={handleClick}>
                Confirm
              </button>
              <button className="cancel-button" onClick={closeModal}>
                Cancel
              </button>
            </ModalFooter>
          </Modal>
        </ModalOverlay>
      )}
    </Container>
  );
};

export default EditButtonComponent;
