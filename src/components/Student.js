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
        <td><button type="button" className="btn btn-danger">Delete</button></td>
        <td>23</td>
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
