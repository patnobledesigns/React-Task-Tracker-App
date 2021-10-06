import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./components/About";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
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
    <Router>
      <TaskTrackerState>
        <div className="container">
          <Header onAdd={addTaskButton} showButtonTxt={showAddTask} />
          {showAddTask && <AddTask addTaskButton={addTaskButton} />}
          <Tasks />
          <Switch>
            <Route path="/about" component={About} />
          </Switch>
          <Footer />
        </div>
      </TaskTrackerState>
    </Router>
  );
}

export default App;
