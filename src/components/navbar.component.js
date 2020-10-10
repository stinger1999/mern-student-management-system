import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg">
        <Link to="/" className="navbar-brand">
          Course Tracker
        </Link>
        <div className="collpase navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="navbar-item">
              <Link to="/" className="nav-link">
                Avaliable Courses
              </Link>
            </li>
            <li className="navbar-item">
              <Link to="/create" className="nav-link">
                Add Course
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
