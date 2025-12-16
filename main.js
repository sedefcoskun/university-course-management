
const Student = require("./models");
const fetchStudents = require("./database");
const {
  calculateClassAverage,
  findTopStudent,
  filterStudents
} = require("./analytics");

console.log("Fetching data from database...");

fetchStudents(rawData => {
  console.log("Data received!\n");

  const students = rawData.map(
    s => new Student(s.id, s.name, s.courses)
  );

  // IMMUTABILITY TEST
  console.log("Testing Immutability:");
  console.log("Original ID:", students[0].id);
  students[0].id = 999;
  console.log(
    "Final ID:",
    students[0].id,
    "(Success: ID did not change)\n"
  );

  console.log("--- Analytics Report ---");

  const avg101 = calculateClassAverage(students, 101);
  console.log("Class Average for Course 101:", avg101);

  const topStudent = findTopStudent(students);
  console.log(
    `Top Student: ${topStudent.name} (Average: ${topStudent.getAverage()})`
  );

  const course102Students = filterStudents(
    students,
    s => s.courses.some(c => c.courseId === 102)
  );

  console.log(
    "Students in Course 102:",
    course102Students.map(s => s.name).join(", ")
  );
});
