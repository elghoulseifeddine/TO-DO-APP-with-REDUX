
import React, { useState } from "react";
import Modal from "react-modal";
import { Form, Button, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {editTask } from "../../JS/actions/tasksActions";
import {IoMdCreate } from "react-icons/io";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const EditTask = ({title,description,id}) => {
  const dispatch= useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [titleT, setTitle] = useState(title);
  const [descriptionT, setDescription] = useState(description);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitEdit = (e) => {
    e.preventDefault();
    let newEdit = {
      titleT,
      descriptionT,
    };

    if(titleT === "" || descriptionT === ""){return (closeModal(),
    alert("You are missing some inputs!!"))}

    dispatch(editTask({newEdit: {titleT, descriptionT},id}));
    closeModal();

  };

  return (
    <div>
    <IoMdCreate className="btnAdd" onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Form>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Task title : </Form.Label>
            <Form.Control
              type="text"
              value={titleT}
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label> Description : </Form.Label>
            <Form.Control
              value= {descriptionT}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{backgroundColor: 'black'}}
            onClick={(e) =>submitEdit(e)}
          >
            Edit
          </Button>
        </Form>

      </Modal>
    </div>
  );
};

export default EditTask; 
