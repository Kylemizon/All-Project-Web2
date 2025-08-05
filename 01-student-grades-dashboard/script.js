// Starter data
const students = [
  { name: "Anna", grade: 92 },
  { name: "Ben", grade: 78 },
  { name: "Clara", grade: 88 },
  { name: "David", grade: 84 },
  { name: "Ella" } // no grade, should use default
];

// Start coding here...

function displayStudent({ name, grade }) {
  return `Student ${name} has a grade of ${grade}.`;
}

const studentName = students.map(student => student.name.toUpperCase());
let nameDisplay = document.getElementById("student-name");
nameDisplay.textContent = studentName.join(" ");

const studentGrade = students.filter(grades => grades.grade >= 85).map(displayStudent);
let studentGradeFilter = document.getElementById("student_GradeFilter");
studentGradeFilter.textContent = studentGrade.join(" ");

const totalOfGrades = students.reduce((acc,student) => acc + (typeof student.grade === "number" ? student.grade : 0),0).toString();
let studentGradeAvg = document.getElementById("student_Avg");
studentGradeAvg.textContent = `The Average grades of the students ${totalOfGrades}`;