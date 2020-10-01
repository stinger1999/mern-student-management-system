import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Pagination from "./common/pagination";

const Course = (props) => (
  <tr>
    <td>{props.course.coursename}</td>
    <td>
      <Link to={"/edit/" + props.course._id}>Edit</Link> |{" "}
      <a
        href="/#"
        onClick={() => {
          props.deleteCourse(props.course._id);
        }}
      >
        Delete
      </a>
    </td>
  </tr>
);

export default class CoursesList extends Component {
  state = {
    pageSize: 4,
  };

  constructor(props) {
    super(props);
    this.PageChange = this.PageChange.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
    this.state = { courses: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/courses/")
      .then((response) => {
        this.setState({ courses: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  deleteCourse(id) {
    axios
      .delete("http://localhost:5000/courses/" + id)
      .then((res) => console.log(res.data));
    this.setState({
      courses: this.state.courses.filter((el) => el._id !== id),
    });
  }

  CourseList() {
    return this.state.courses.map((currentcourse) => {
      return (
        <Course
          course={currentcourse}
          deleteCourse={this.deleteCourse}
          key={currentcourse._id}
        />
      );
    });
  }

  PageChange = (page) => {
    console.log(page);
  };

  render() {
    return (
      <div>
        <h3>Avaliable Courses</h3>
        <table className="table">
          <tbody>{this.CourseList()}</tbody>
        </table>
        <Pagination
          itemsCount={this.state.courses.length}
          pageSize={this.state.pageSize}
          onPageChange={this.PageChange}
        />
      </div>
    );
  }
}
