function calculateClassAverage(students, courseId) {
  const grades = students
    .map(s => s.courses.find(c => c.courseId === courseId))
    .filter(Boolean)
    .map(c => c.grade);

  const total = grades.reduce((sum, g) => sum + g, 0);
  return (total / grades.length).toFixed(2);
}

function findTopStudent(students) {
  return students.reduce((best, current) =>
    current.getAverage() > best.getAverage() ? current : best
  );
}

function filterStudents(students, criteriaFn) {
  return students.filter(criteriaFn);
}

module.exports = {
  calculateClassAverage,
  findTopStudent,
  filterStudents
};
