import React, { useReducer } from "react";
import taskTrackerContext from "./taskTrackerContext";
import TaskTrackerReducer from "./taskTrackerReducer";
import { ADD_TASK, SET_REMINDER, REMOVE_TASK } from "../types";

const TaskTrackerState = (props) => {
  const initialState = {
    tasks: [
      {
        id: 1,
        text: "delectus aut autem",
        day: "Feb 5th at 2:30pm",
        reminder: false,
      },
      {
        id: 2,
        text: "quis ut nam facilis et officia qui",
        day: "Feb 7th at 2:30pm",
        reminder: false,
      },
      {
        id: 3,
        text: "fugiat veniam minus",
        day: "Feb 3rd at 2:30pm",
        reminder: false,
      },
      {
        id: 4,
        text: "et porro tempora",
        day: "Feb 10th at 2:36pm",
        reminder: true,
      },
      {
        id: 5,
        text: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        day: "May 15th at 2:30pm",
        reminder: false,
      },
    ],
  };
  const [state, dispatch] = useReducer(TaskTrackerReducer, initialState);

  // DELETE TASK
  const deleteTask = (id) => {
    dispatch({
      type: REMOVE_TASK,
      payload: state.tasks.filter((task) => task.id !== id),
    });
  };

  // TOGGLE REMINDER
  const toggleReminder = (id) => {
    dispatch({
      type: SET_REMINDER,
      payload: state.tasks.map((task) =>
        task.id === id ? (task.reminder = !task.reminder) : task,
      ),
    });
  };

  // ADD TASK
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    dispatch({
      type: ADD_TASK,
      payload: [...state.tasks, newTask],
    });
  };

  return (
    <taskTrackerContext.Provider
      value={{
        tasks: state.tasks,
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
