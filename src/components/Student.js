import React, { Component } from 'react';
class Student extends Component {
  constructor(props) {
    super(props);
    this.state = { modifiedBtnClicked: false };
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
    buffer.push(  // Push basic data
      // React.Fragment is used to prevent wrapping with <div>
      <React.Fragment>
        <th scope='row'>{id}</th>
        <td>{fName}</td>
        <td>{lName}</td>
        <td>{numGrade}</td>
        <td>{nGrade}</td>
      </React.Fragment>
    );
    if (this.props.unsorted) {  // If received StudentList as element, we push delete and modify buttons
      buffer.push(
        <React.Fragment>
          <td>
            <button
              onClick={this.props.handleDelete.bind(this, id)}
              type='button'
              className='btn btn-danger btn-block'
            >
              Delete
            </button>
          </td>
          <td>
            <button
              onClick={this.props.handleModify.bind(this, [
                id,
                fName,
                lName,
                numGrade
              ])}
              type='button'
              className='btn btn-info btn-block'
            >
              Modify
            </button>
          </td>
        </React.Fragment>
      );
    }
    return(<tr>{buffer}</tr>)
  }
}
Student.defaultProps = {
  unsorted: false
};
export default Student;
