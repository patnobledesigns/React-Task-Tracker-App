import React, { useContext } from "react";
import { FaTimes } from "react-icons/fa";
import TaskTrackerContext from "../context/TaskTracker/taskTrackerContext";

const Task = ({ task }) => {
  const taskTrackerContext = useContext(TaskTrackerContext);
  const { deleteTask, toggleReminder } = taskTrackerContext;
  return (
    <div
      className={`task ${task.reminder ? "reminder" : ""}`}
      onDoubleClick={() => toggleReminder(task.id)}
    >
      <h3>
        {task.text}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => deleteTask(task.id)}
        />
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
