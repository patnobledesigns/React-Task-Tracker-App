import React, { useState } from "react";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import TaskTrackerState from "./context/TaskTracker/TaskTrackerState";

function App() {
  const [showAddTask, setshowAddTask] = useState(false);
  // ADD TASK BUTTON
  const addTaskButton = () => {
    setshowAddTask(!showAddTask);
  };
  return (
    <TaskTrackerState>
      <div className="container">
        <Header onAdd={addTaskButton} showButtonTxt={showAddTask} />
        {showAddTask && <AddTask addTaskButton={addTaskButton} />}
        {/* {tasks.length > 0 ? <Tasks /> : "No Task To Show"} */}
        <Tasks />
      </div>
    </TaskTrackerState>
  );
}

export default App;
