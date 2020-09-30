import React, { Component } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class RegisterStudent extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudentFirstName = this.onChangeStudentFirstName.bind(this);
    this.onChangeStudentLastName = this.onChangeStudentLastName.bind(this);
    this.onChangeStudentBirthday = this.onChangeStudentBirthday.bind(this);
    this.onChangeStudentAddress = this.onChangeStudentAddress.bind(this);
    this.onChangeStudentPhoneNumber = this.onChangeStudentPhoneNumber.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      studentfirstname: "",
      studentlastname: "",
      studentbirthday: new Date(),
      studentaddress: "",
      studentphonenumber: "",
    };
  }

  onChangeStudentFirstName(e) {
    this.setState({
      studentfirstname: e.target.value,
    });
  }

  onChangeStudentLastName(e) {
    this.setState({
      studentlastname: e.target.value,
    });
  }

  onChangeStudentBirthday(date) {
    this.setState({
      studentbirthday: date,
    });
  }

  onChangeStudentAddress(e) {
    this.setState({
      studentaddress: e.target.value,
    });
  }

  onChangeStudentPhoneNumber(e) {
    this.setState({
      studentphonenumber: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const student = {
      studentfirstname: this.state.studentfirstname,
      studentlastname: this.state.studentlastname,
      studentbirthday: this.state.studentbirthday,
      studentaddress: this.state.studentaddress,
      studentphonenumber: this.state.studentphonenumber,
    };
    console.log(student);
    axios
      .post("http://localhost:5000/students/register/", student)
      .then((res) => console.log(res.data));
    window.location = "/";
  }

  render() {
    return (
      <div>
        <h3>Student Registration Form</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.studentfirstname}
              onChange={this.onChangeStudentFirstName}
            />
          </div>
          <div className="form-group">
            <label> Last name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.studentlastname}
              onChange={this.onChangeStudentLastName}
            />
          </div>
          <div className="form-group">
            <label> Birthday:&emsp; </label>
            <DatePicker
              selected={this.state.studentbirthday}
              onChange={this.onChangeStudentBirthday}
            />
          </div>
          <div className="form-group">
            <label> Address: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.studentaddress}
              onChange={this.onChangeStudentAddress}
            />
          </div>
          <div className="form-group">
            <label> Phone Number: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.studentphonenumber}
              onChange={this.onChangeStudentPhoneNumber}
            />
          </div>
          <div className="form-group">
            <input type="submit" value="Register" className="btn btn-primary" />
          </div>
        </form>
      </div>
    );
  }
}
