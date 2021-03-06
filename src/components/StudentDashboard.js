import React, { Component } from 'react';
import StudentLister from './StudentLister';
import StudentList from './StudentList';
import Summary from './Summary';
import StudentModificationForm from './StudentModificationForm';
// The parent component

class StudentDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: -1, //  ID of the student to be modified
      studToModify: null, // Only used as placeholder for the Modify modal form
      toggleForm: false, //  true to show form when modify btn is clicked
      students: [
        //  Holds the current list of students
        {
          id: 1,
          fName: 'Angelu Ferdinand',
          lName: 'Garcia',
          nGrade: 100,
        },
        {
          id: 2,
          fName: 'Lyra Angela',
          lName: 'Manseguiao',
          nGrade: 91,
        },
        {
          id: 3,
          fName: 'John',
          lName: 'Doe',
          nGrade: 49,
        },
        {
          id: 4,
          fName: 'Jack',
          lName: 'Black',
          nGrade: 32,
        },
        {
          id: 5,
          fName: 'Fun',
          lName: 'Do',
          nGrade: 81,
        },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this); // Bind submit btn to this class
    this.handleDelete = this.handleDelete.bind(this);
    this.handleModify = this.handleModify.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
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
      nGrade,
    };
    this.setState((state, props) => {
      return {
        students: [...state.students, studToAdd], // ES6 spread operator (like append) | copies by value instead of reference
      };
    });
  }

  // Handles Student's delete button
  handleDelete(studentID) {
    //delete student with studentID from state
    // this.state.people.filter(item => item !== e.target.value)

    this.setState((state, props) => {
      return {
        students: state.students.filter((stud) => stud.id !== studentID), // if equal to parameter, do not include it in new state
      };
    });
  }

  // Handles Student's modify button
  handleModify(modifiedInfo) {
    let [newFN, newLN, newNG] = modifiedInfo;
    
    // If any inputboxes left blanked, information is unchanged
    if (newFN == null || newFN.trim() === '') newFN = this.state.studToModify.fName
    if (newLN == null || newLN.trim() === '') newLN = this.state.studToModify.lName
    if (newNG <= 0 || newNG === undefined) newNG = this.state.studToModify.nGrade
    
    this.setState((state, props) => {
      return {
        students: state.students.map((stud) => {
          if (stud.id === this.state.id) {
            stud.fName = newFN;
            stud.lName = newLN;
            stud.nGrade = newNG;
          }
          return stud;
        }),
      };
    });
  }

  // Switch to show form
  toggleForm(id) {
    if (id !== undefined) {
      this.setState((state, props) => {
        return { id: id };
      });
      let object = this.state.students.find((o) => o.id === id); // Getting a reference of the student to modify
      this.setState((state, props) => {
        return { studToModify: object };
      }); //  Updating student to modify
    }

    this.setState((state, props) => {
      return { toggleForm: !state.toggleForm };
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
            toggleForm={this.toggleForm}
          />

          <Summary students={this.state.students} />
          <StudentModificationForm
            toggleForm={this.state.toggleForm /* current state of show/hide */}
            studToModify={
              this.state.studToModify /* passed to be used as placeholder */
            }
            toggle={
              this
                .toggleForm /*  handler that enables to set show/hide modal form */
            }
            handleModify = {this.handleModify}
          />
        </div>
      </div>
    );
  }
}
export default StudentDashboard;
