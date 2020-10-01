import React, { Component } from "react";
import axios from "axios";

export default class CreateCourse extends Component {
  constructor(props) {
    super(props);

    this.onChangeCourseName = this.onChangeCourseName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      coursename: "",
    };
  }

  onChangeCourseName(e) {
    this.setState({
      coursename: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const course = {
      coursename: this.state.coursename,
    };
    console.log(course);
    axios
      .post("http://localhost:5000/courses/add", course)
      .then((res) => console.log(res.data));

    window.location = "/create";
  }

  render() {
    return (
      <div>
        <h3>Add New Course</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Course name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.coursename}
              onChange={this.onChangeCourseName}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Add" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
