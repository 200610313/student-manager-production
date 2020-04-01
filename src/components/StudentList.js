import React from 'react'
import Student from './Student';

const StudentList = (props) => {
  /* formatting students */
  const students = props.students.map((stud) => (
    <Student
      key={stud.id}
      id={stud.id}
      fName={stud.fName}
      lName={stud.lName}
      nGrade={stud.nGrade}
    />
  ));
  return (
    <div>
      <div className='row mt-2'>
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>First Name</th>
              <th scope='col'>Last Name</th>
              <th scope='col'>Numeric Grade</th>
              <th scope='col'>Letter Grade</th>
            </tr>
          </thead>
          <tbody>
            {/* Displaying students */}
            {students}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentList;
