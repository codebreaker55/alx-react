import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const seqGrade = Seq(object);

  const filteredGrade = seqGrade.filter((student) => {
    student.firstName.charAt(0).toUpperCase();
    return student.score > 70;
  });

  function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const StudentObject = filteredGrade.toJS();

  Object.keys(StudentObject).map((key) => {
    StudentObject[key].firstName = capFirstLetter(StudentObject[key].firstName);
    StudentObject[key].lastName = capFirstLetter(StudentObject[key].lastName);
    return StudentObject[key];
  });

  console.log(StudentObject);
}
