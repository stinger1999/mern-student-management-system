const router = require("express").Router();
let Student = require("../models/student.model");

router.route("/").get((req, res) => {
  Student.find()
    .then((students) => res.json(students))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/register").post((req, res) => {
  let sid = "00001";
  Student.find()
    .then((students) => {
      if (students.length != 0) {
        nextstudentid = parseInt(students[students.length - 1].studentid) + 1;
        lengthofstudentid = 5 - nextstudentid.toString().length;
        zero = "0";
        for (i = 0; i < lengthofstudentid; i++) {
          nextstudentid = zero.concat(nextstudentid);
          sid = nextstudentid;
        }
      }
      const studentid = sid;
      const studentfirstname = req.body.studentfirstname;
      const studentlastname = req.body.studentlastname;
      const studentbirthday = Date.parse(req.body.studentbirthday);
      const studentaddress = req.body.studentaddress;
      const studentphonenumber = req.body.studentphonenumber;

      const newStudent = new Student({
        studentid,
        studentfirstname,
        studentlastname,
        studentbirthday,
        studentaddress,
        studentphonenumber,
      });
      newStudent
        .save()
        .then(() => res.json("Student added!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Student.findById(req.params.id)
    .then((student) => res.json(student))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Student.findByIdAndDelete(req.params.id)
    .then(() => res.json("Student deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
