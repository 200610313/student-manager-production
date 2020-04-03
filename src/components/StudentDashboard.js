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
    this.handleSubmit = this.handleSubmit.bind(this); // Bind submit btn to this class
    this.handleDelete = this.handleDelete.bind(this)
  }

  // Handles StudentLister's submit button
  handleSubmit(newStudent) {
    const [fName, lName, nGrade] = newStudent;
    const id = Math.floor(Math.random() * (100 - 0)) + 0; // ID = random between 0-100
    // Proper formatting
    const studToAdd = {
      id, // ES6 feature: these attributes are assigned to values from this local method
      fName,
      lName,
      nGrade
    };
    this.setState((state, props) => {
      return {
        students: [...state.students, studToAdd] // ES6 spread operator | copies by value instead of reference
      };
    });
  }

  // Handles Student's delete button
  handleDelete(studentID) {
    //delete student with studentID from state
    // this.state.people.filter(item => item !== e.target.value)

    this.setState((state, props) => {
      return {
        students: state.students.filter((stud) => stud.id !== studentID)
      };
    });
  }

  render() {
    return (
      <div>
        <div className='container'>
          <StudentLister handleSubmit={this.handleSubmit} />
          {/* Passing a reference to handle Submit button  */}

          <StudentList
            students={this.state.students}
            handleDelete={this.handleDelete}
          />

          <Summary students={this.state.students} />
        </div>
      </div>
    );
  }
}

export default StudentDashboard;
