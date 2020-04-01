import React from 'react'

const Student = (props) => {
  return (
    <tr>
      <th scope='row'>{props.id}</th>
      <td>{props.fName}</td>
      <td>{props.lName}</td>
      <td>{props.nGrade}</td>
      <td>{props.lGrade}</td>
    </tr>
  );
};

export default Student;
