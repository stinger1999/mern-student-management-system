const router = require("express").Router();
let Course = require("../models/course.model");

router.route("/").get((req, res) => {
  Course.find()
    .then((courses) => res.json(courses))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post(async (req, res) => {
  let cid = "001";
  Course.find()
    .then((courses) => {
      if (courses.length != 0) {
        nextcourseid = parseInt(courses[courses.length - 1].courseid) + 1;
        lengthofcourseid = 3 - nextcourseid.toString().length;
        zero = "0";
        for (i = 0; i < lengthofcourseid; i++) {
          nextcourseid = zero.concat(nextcourseid);
          cid = nextcourseid;
        }
      }
      const courseid = cid;
      const coursename = req.body.coursename;

      const newCourse = new Course({ coursename, courseid });

      newCourse
        .save()
        .then(() => res.json("Course added!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Course.findById(req.params.id)
    .then((course) => res.json(course))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Course.findByIdAndDelete(req.params.id)
    .then(() => res.json("Course deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Course.findById(req.params.id)
    .then((course) => {
      coursename = req.body.coursename;

      course
        .save()
        .then(() => res.json("Course information updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
