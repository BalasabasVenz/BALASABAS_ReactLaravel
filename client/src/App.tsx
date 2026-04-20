function App() {
  let studentName: string = "DaBrick";
  let age: number = 20;
  let isActive: boolean = true;
  let gradeLevel: "Grade 7" | "Grade 8" | "Grade 9";
  gradeLevel = "Grade 9";
  let status: "Active" | "Inactive";
  status = "Active";
  function getRemarks(score: number): string {
    if (score >= 90) {
      return "Excellent";
    } else if (score >= 75) {
      return "Passed";
    } else {
      return "Failed";
    }
  }

  console.log(getRemarks(95));
  interface Student {
    name: string;
    age: number;
    gradeLevel: string;
    status: "Active" | "Inactive";
    score: number;
  }
  let student1: Student = {
    name: "Maria Santos",
    age: 15,
    gradeLevel: "Grade 9",
    status: "Active",
    score: 88,
  };

  return (
    <>
      <h1>Student Profile System</h1>
      <p>Name: {studentName}</p>
      <p>Age: {age}</p>
      <p>Active: {isActive ? "Yes" : "No"}</p>
      <p>Grade Level: {gradeLevel}</p>
      <p>Status: {status}</p>
      <h2>Student 1</h2>
      <p>Name: {student1.name}</p>
      <p>Age: {student1.age}</p>
      <p>Grade Level: {student1.gradeLevel}</p>
      <p>Status: {student1.status}</p>
      <p>Score: {student1.score}</p>
      <p>Remarks: {getRemarks(student1.score)}</p>
    </>
  );
}

export default App;