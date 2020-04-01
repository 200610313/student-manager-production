import React, { Component } from 'react';
import StudentLister from './StudentLister';
import StudentList from './StudentList';
import Summary from './Summary';

class StudentDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          id: 1,
          fName: 'Angelu Ferdinand',
          lName: 'Garcia',
          nGrade: '100'
        },
        {
          id: 2,
          fName: 'Lyra Angela',
          lName: 'Manseguiao',
          nGrade: '91'
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <div className='container'>
          <StudentLister />

          <StudentList students={this.state.students} />

          <Summary />
        </div>
      </div>
    );
  }
}

export default StudentDashboard;
