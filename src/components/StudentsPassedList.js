import React from 'react';
import Student from './Student';

const StudentsPassedList = (props) => {
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
    <table className='table table-success'>
      <thead>
        <tr>
          <th scope='col'>#</th>
          <th scope='col'>First Name</th>
          <th scope='col'>Last Name</th>
          <th scope='col'>Numeric Grade</th>
          <th scope='col'>Letter Grade</th>
        </tr>
      </thead>
      <tbody>{students}</tbody>
    </table>
  );
};

export default StudentsPassedList;
