import React, { Component } from 'react';
import StudentLister from './StudentLister';
import StudentList from './StudentList';
import Summary from './Summary';

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
        }
      ],

      //  For the to-be added student
      id: -1,
      fName: '',
      lName: '',
      nGrade: -2
    };
  }

  render() {
    return (
      <div>
        <div className='container'>
          <StudentLister />

          <StudentList students = {this.state.students} />

          <Summary students = {this.state.students}/>
        </div>
      </div>
    );
  }
}

export default StudentDashboard;
