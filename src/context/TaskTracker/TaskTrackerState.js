import React, { useReducer, useEffect } from "react";
import taskTrackerContext from "./taskTrackerContext";
import TaskTrackerReducer from "./taskTrackerReducer";
import { ADD_TASK, SET_REMINDER, REMOVE_TASK, FETCH_TASK } from "../types";

const TaskTrackerState = (props) => {
  const initialState = {
    tasks: [],
    loading: true,
  };
  const [state, dispatch] = useReducer(TaskTrackerReducer, initialState);

  //Fetch Tasks
  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks/");
    const data = await response.json();
    return data;
  };
  //Fetch Task
  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const getTasks = async () => {
      try {
        const data = await fetchTasks();
        dispatch({
          type: FETCH_TASK,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
    };
    getTasks();
    // eslint-disable-next-line
  }, []);

  // ADD TASK
  const addTask = async (task) => {
    // const id = Math.floor(Math.random() * 10000) + 1;
    // const newTask = { id, ...task };

    const response = await fetch(`http://localhost:5000/tasks/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });
    const data = await response.json();
    dispatch({
      type: ADD_TASK,
      payload: data,
    });
  };

  // DELETE TASK
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });
    dispatch({
      type: REMOVE_TASK,
      payload: id,
    });
  };

  // TOGGLE REMINDER
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);

    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updatedTask),
    });
    const data = await response.json();
    dispatch({
      type: SET_REMINDER,
      payload: id,
      newarr : data
    });
  };

  return (
    <taskTrackerContext.Provider
      value={{
        tasks: state.tasks,
        loading: state.loading,
        addTask,
        toggleReminder,
        deleteTask,
      }}
    >
      {props.children}
    </taskTrackerContext.Provider>
  );
};
export default TaskTrackerState;
