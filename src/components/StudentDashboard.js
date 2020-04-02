import React, { Component } from 'react';
import StudentLister from './StudentLister';
import StudentList from './StudentList';
import Summary from './Summary';

// The parent component

class StudentDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        //  Holds the current list of students
        {
          id: 1,
          fName: 'Angelu Ferdinand',
          lName: 'Garcia',
          nGrade: 100
        },
        {
          id: 2,
          fName: 'Lyra Angela',
          lName: 'Manseguiao',
          nGrade: 91
        },
        {
          id: 3,
          fName: 'John',
          lName: 'Doe',
          nGrade: 49
        },
        {
          id: 4,
          fName: 'Jack',
          lName: 'Black',
          nGrade: 32
        },
        {
          id: 5,
          fName: 'Fun',
          lName: 'Do',
          nGrade: 81
        }
      ]
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Handles StudentLister's submit button
  handleSubmit(newStudent) {
    const [fName, lName, nGrade] = newStudent;
    this.setState((state, props) => {
      return {
        students: state.students.push({
          id: 10,
          fName: fName,
          lName: lName,
          nGrade: nGrade
        })
      };
    });
  }

  render() {
    return (
      <div>
        <div className='container'>
          <StudentLister handleSubmit={this.handleSubmit} />
          {/* Passing a reference to handle Submit button  */}

          <StudentList students={this.state.students} />

          <Summary students={this.state.students} />
        </div>
      </div>
    );
  }
}

export default StudentDashboard;
