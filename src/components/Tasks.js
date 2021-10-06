import React, { Fragment, useContext } from "react";
import Task from "./Task";
import TaskTrackerContext from "../context/TaskTracker/taskTrackerContext";

const Tasks = () => {
  const taskTrackerContext = useContext(TaskTrackerContext);

  const { tasks, loading } = taskTrackerContext;
  return (
    <Fragment>
      {loading ? (
        <h3>{"Loading tasks..."}</h3>
      ) : tasks.length > 0 ? (
        tasks.map((task) => <Task key={task.id} task={task} />)
      ) : (
        "No Task To Show"
      )}
    </Fragment>
  );
};

export default Tasks;
