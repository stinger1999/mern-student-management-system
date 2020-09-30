import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/navbar.component";
import CoursesList from "./components/courses-list.component";
import CreateCourse from "./components/create-course.component";
import EditCourse from "./components/edit-course.component";
import RegisterStudent from "./components/register-student.component";

function App() {
  return (
    <Router>
      <div class="container">
        <Navbar />
        <br />
        <Route path="/" exact component={CoursesList} />
        <Route path="/edit/:id" component={EditCourse} />
        <Route path="/create" component={CreateCourse} />
        <Route path="/student" component={RegisterStudent} />
      </div>
    </Router>
  );
}

export default App;
