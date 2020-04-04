import React, { Component } from 'react';
/* Returns formatting for StudentList, StudentsFailedList, and StudentsPassedList */
class Student extends Component {
  constructor(props) {
    super(props);
    this.state = { modifiedBtnClicked: true };
  }
  handleModify(){
    this.setState((state, props) => { return { modifiedBtnClicked: !state.modifiedBtnClicked }})
  }
  render() {
    const nGrade = //  Letter grade translation
        this.props.nGrade < 50
          ? 'F'
          : this.props.nGrade < 60
          ? 'D'
          : this.props.nGrade < 68
          ? 'C'
          : this.props.nGrade < 76
          ? 'B-'
          : this.props.nGrade < 84
          ? 'B'
          : this.props.nGrade < 92
          ? 'A-'
          : 'A',
      id = this.props.id,
      fName = this.props.fName,
      lName = this.props.lName,
      numGrade = this.props.nGrade;

    let buffer = []; //  Contains the proper JSX according to props.unsorted
    buffer.push(
      // Push basic data
      // React.Fragment is used to prevent wrapping with <div>
      <React.Fragment>
        <th scope='row' key = {id+1}>{id}</th>
        <td key = {id+2}>{fName}</td>
        <td key = {id+3}>{lName}</td>
        <td key = {id+4}>{numGrade}</td>
        <td key = {id+5}>{nGrade}</td>
      </React.Fragment>
    );
    if (this.props.unsorted) {
      // If received StudentList as element, we push delete and modify buttons
      buffer.push(
        <React.Fragment>
          <td>
            <button
              onClick={this.props.handleDelete.bind(this, id)} // If clicked, pass the student's ID
              type='button'
              className='btn btn-danger btn-block'
            >
              Delete
            </button>
          </td>
          <td>
            <button
              onClick={this.props.toggleForm.bind(this,this.props.id)}
              type='button'
              className='btn btn-info btn-block'
            >
              Modify
            </button>
          </td>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <tr>{buffer}</tr>
      </React.Fragment>
    );
  }
}
Student.defaultProps = {
  unsorted: false
};
export default Student;
