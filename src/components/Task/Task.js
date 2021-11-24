import React from "react";
import { Card } from "react-bootstrap";
import {
  IoIosCheckmarkCircle,
  IoMdCreate,
  IoMdCheckmark,
  IoMdTrash,
} from "react-icons/io";
import { useDispatch } from "react-redux";
import { changeIsDone, deleteTasks } from "../../JS/actions/tasksActions";
import { useState } from "react";
import EditTask from "../EditTask/EditTask";

const Task = ({ task: { title, description, id, isDone } }) => {
  const dispatch = useDispatch();
  const [colorChange, setColorChange] = useState(true);
  const styleHandle = () => {
    dispatch(changeIsDone(id));
    setColorChange(!colorChange);
  };
  return (
    <div>
      <Card
        className="card"
        style={{
          width: "18rem",
          borderRadius: "30%",
          backgroundColor: "beige",
          borderColor: "black",
        }}
      >
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {isDone ? "Done" : "Still not done"}
          </Card.Subtitle>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <div className="icons">
          {colorChange ? (
            <IoMdCheckmark onClick={() => styleHandle()} />
          ) : (
            <IoIosCheckmarkCircle onClick={() => styleHandle()} />
          )}
          <EditTask title={title} description={description} id={id} />
          <IoMdTrash onClick={() => dispatch(deleteTasks(id))} />
        </div>
      </Card>
    </div>
  );
};

export default Task;
