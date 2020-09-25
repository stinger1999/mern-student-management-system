const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const studentSchema = new Schema(
  {
    studentid: { type: String, required: true, unique: true },
    studentfirstname: { type: String, required: true },
    studentlastname: { type: String, required: true },
    studentgpa: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
