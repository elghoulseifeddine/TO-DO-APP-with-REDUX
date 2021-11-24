
import React, { useState } from "react";
import Modal from "react-modal";
import { Form, Button, Col } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTask } from "../../JS/actions/tasksActions";


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

const AddTask = () => {
  const dispatch= useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const isDone=false;
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const submitTask = (e) => {
    e.preventDefault();
    let newTask = {
      id: uuidv4(),
      title,
      description,
      isDone,

    };

    if(title === "" || description === ""){return (closeModal(),
    alert("You are missing some inputs!!"))}

    dispatch(addTask(newTask));
    closeModal();
    setTitle("");
    setDescription("");

  };

  return (
    <div>
      <button style={{backgroundColor: 'black', color:'beige' , borderRadius: '30%'}} onClick={openModal}>Add Task</button>
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
              placeholder="Enter the title ..."
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridAddress2">
            <Form.Label> Description : </Form.Label>
            <Form.Control
              placeholder="Enter description ..."
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{backgroundColor: 'black'}}
            onClick={(e) =>submitTask(e)}
          >
            Add
          </Button>
        </Form>

      </Modal>
    </div>
  );
};

export default AddTask; 