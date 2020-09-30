const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    studentid: { type: String, required: true, unique: true },
    studentfirstname: { type: String, required: true },
    studentlastname: { type: String, required: true },
    studentbirthday: { type: Date, required: true },
    studentaddress: { type: String, required: true },
    studentphonenumber: { type: String, required: true, maxlength: 10 },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
