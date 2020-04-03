import React from 'react';

// Formats the render for each student that appears in StudentList, StudentsPassedList and StudentsFailedList
const Student = (props) => {
  if (props.unsorted)
    //Display with buttons | used by studentlist
    return (
      <tr>
        <th scope='row'>{props.id}</th>
        <td>{props.fName}</td>
        <td>{props.lName}</td>
        <td>{props.nGrade}</td>
        <td>
          {/* Letter grade translation */}
          {props.nGrade < 50
            ? 'F'
            : props.nGrade < 60
            ? 'D'
            : props.nGrade < 68
            ? 'C'
            : props.nGrade < 76
            ? 'B-'
            : props.nGrade < 84
            ? 'B'
            : props.nGrade < 92
            ? 'A-'
            : 'A'}
        </td>
        <td><button onClick = {props.handleDelete.bind(this,props.id)} type="button" className="btn btn-danger btn-block">Delete</button></td>
        <td><button onClick = {props.handleModify.bind(this,[props.id,props.fName,props.lName,props.nGrade])} type="button" className="btn btn-info btn-block">Modify</button></td>
      </tr>
    );
  
  else //Display without buttons | used by studentlist
    return (
      <tr>
        <th scope='row'>{props.id}</th>
        <td>{props.fName}</td>
        <td>{props.lName}</td>
        <td>{props.nGrade}</td>
        <td>
          {/* Letter grade translation */}
          {props.nGrade < 50
            ? 'F'
            : props.nGrade < 60
            ? 'D'
            : props.nGrade < 68
            ? 'C'
            : props.nGrade < 76
            ? 'B-'
            : props.nGrade < 84
            ? 'B'
            : props.nGrade < 92
            ? 'A-'
            : 'A'}
        </td>
      </tr>
    );
    
};
Student.defaultProps = {
  unsorted: false
};

export default Student;
