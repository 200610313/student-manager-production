import React from 'react';
import StudentsPassedList from './StudentsPassedList';
import StudentsFailedList from './StudentsFailedList';

// Returns proper formatting for StudentsPassedList and StudentsFailedList

const Summary = (props) => {
  const rowStyle = 'row justify-content-center align-items-start mt-2';
  const colStyle = 'col-sm-6';

  //  Holds the info of the students
  const studentsPassed = []; 
  const studentsFailed = []; 
  // Sorting students who passed and students who failed
  props.students.map((stud) =>
    stud.nGrade >= 50
      ? studentsPassed.push({
          id: stud.id,
          fName: stud.fName,
          lName: stud.lName,
          nGrade: stud.nGrade
        })
      : studentsFailed.push({
          id: stud.id,
          fName: stud.fName,
          lName: stud.lName,
          nGrade: stud.nGrade
        })
  );
  return (
    <div>
      <div className={rowStyle}>
        <div className={colStyle}>
          <StudentsPassedList students={studentsPassed} />
        </div>
        <div className={colStyle}>
          <StudentsFailedList students={studentsFailed} />
        </div>
      </div>
    </div>
  );
};

export default Summary;
