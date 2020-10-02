import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import _ from "lodash";
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
  //state = { courses: [], pageSize: 4, currentPage: 1 };

  constructor(props) {
    super(props);
    this.paginate = this.paginate.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.deleteCourse = this.deleteCourse.bind(this);
    this.state = {
      courses: [],
      pageSize: 9,
      currentPage: 1,
    };
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

  paginate(items, pageNumber, pageSize) {
    const startIndex = (pageNumber - 1) * pageSize;
    return _(items).slice(startIndex).take(pageSize).value();
  }

  CourseList() {
    const { pageSize, currentPage, courses: allCourses } = this.state;
    const courses = this.paginate(allCourses, currentPage, pageSize);
    return courses.map((currentcourse) => {
      return (
        <Course
          course={currentcourse}
          deleteCourse={this.deleteCourse}
          key={currentcourse._id}
        />
      );
    });
  }

  handlePageChange(page) {
    this.setState({ currentPage: page });
  }

  render() {
    const { pageSize, currentPage } = this.state;

    if (this.state.courses.length === 0)
      return (
        <p>
          <i>
            There are no courses avaliable at the moment. Sorry for the
            inconvience.
          </i>
        </p>
      );

    return (
      <div>
        <h3>Avaliable Courses</h3>
        <p>
          <i>Number of avaliable courses: {this.state.courses.length}</i>
        </p>
        <table className="table">
          <tbody>{this.CourseList()}</tbody>
        </table>
        <Pagination
          itemsCount={this.state.courses.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}
