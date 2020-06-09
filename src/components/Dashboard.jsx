import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import "./dashboard.css";

const Dashboard = () => {
  const { name } = useContext(GlobalContext);
  return (
    <div>
      <div className="navbar">
        <h1 className="title-bar">Project Manager</h1>
      </div>
      <div className="container">
        <div className="sidebar">
          <nav>
            <ul className="project-list">
              <div className="sidebar-header">
                <h1 className="sidebar-header-title">Projects</h1>
                <button className="add-new-project-btn">+</button>
              </div>
              <li className="project-item">
                <button className="project-item-btn">Grammar Exam App</button>
              </li>
              <li className="project-item">
                <button className="project-item-btn">Ticketing System</button>
              </li>
              <li className="project-item">
                <button className="project-item-btn">Grammar Exam App</button>
              </li>
              <li className="project-item">
                <button className="project-item-btn">Grammar Exam App</button>
              </li>
            </ul>
          </nav>
        </div>
        <div className="main">
          <div className="project-name-box">
            {/* <input type="text" value={"Grammar Exam App"} /> */}
            <h1 className="project-name-box-title">Grammar Exam App</h1>
            <button>+</button>
            <button>x</button>
          </div>

          <div className="project-task-list">
            <div className="task-list-item">
              <div className="task-list-item-navbar">
                <h1 className="task-list-item-navbar-title">New Task</h1>
                <button>+</button>
                <button>x</button>
              </div>
            </div>
            <div className="task-list-item">
              <div className="task-list-item-navbar">
                <h1 className="task-list-item-navbar-title">New Task</h1>
                <button>+</button>
                <button>x</button>
              </div>
            </div>
            <div className="task-list-item">
              <div className="task-list-item-navbar">
                <h1 className="task-list-item-navbar-title">New Task</h1>
                <button>+</button>
                <button>x</button>
              </div>
            </div>
            <div className="task-list-item">
              <div className="task-list-item-navbar">
                <h1 className="task-list-item-navbar-title">New Task</h1>
                <button>+</button>
                <button>x</button>
              </div>
            </div>
            <div className="task-list-item">
              <div className="task-list-item-navbar">
                <h1 className="task-list-item-navbar-title">New Task</h1>
                <button>+</button>
                <button>x</button>
              </div>
            </div>
            <div className="task-list-item">
              <div className="task-list-item-navbar">
                <h1 className="task-list-item-navbar-title">New Task</h1>
                <button>+</button>
                <button>x</button>
              </div>
            </div>
            <div className="task-list-item">
              <div className="task-list-item-navbar">
                <h1 className="task-list-item-navbar-title">New Task</h1>
                <button>+</button>
                <button>x</button>
              </div>
            </div>
            <div className="task-list-item">
              <div className="task-list-item-navbar">
                <h1 className="task-list-item-navbar-title">New Task</h1>
                <button>+</button>
                <button>x</button>
              </div>
            </div>
            <div className="task-list-item">
              <div className="task-list-item-navbar">
                <h1 className="task-list-item-navbar-title">New Task</h1>
                <button>+</button>
                <button>x</button>
              </div>
            </div>
            <div className="task-list-item">
              <div className="task-list-item-navbar">
                <h1 className="task-list-item-navbar-title">New Task</h1>
                <button>+</button>
                <button>x</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
