import React from "react";

const EmptyTask = () => {
  return (
    <div
      className="list empty"
      style={{
        color: "beige",
        textAlign: "center",
      }}
    >
    <img
        src="https://tse1.mm.bing.net/th?id=OIP.LKJ4zscB7DXoYmHrVc3KAQHaHa&pid=Api&P=0&w=300&h=300"
        alt="flech"
      />
      <h1>YOU HAVE NOTHING TO DO YET</h1>
      <h3>Add some tasks by clicking on Add Task</h3>
    </div>
  );
};

export default EmptyTask;
