import React, { Component } from 'react';

// Form for adding a new student

class StudentLister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //  For the to-be added student
      fName: '',
      lName: '',
      nGrade: -2
    };
  }
  // Updates changes in state for first, last, and numeric grade entries
  handleFName(e) {
    const update = e.target.value;
    this.setState((state, props) => {
      return { fName: update };
    });
  }

  handleLName(e) {
    const update = e.target.value;
    this.setState((state, props) => {
      return { lName: update };
    });
  }

  handleNGrade(e) {
    const update = e.target.value;
    this.setState((state, props) => {
      return { nGrade: update };
    });
  }
  //

  render() {
    const rowStyle = 'row justify-content-center align-items-center mt-2';
    const colStyle = 'col';
    return (
      <div>
        <form>
          <div className={rowStyle}>
            <div className={colStyle}>
              <input
                name='fName'
                onChange={(this.handleFName = this.handleFName.bind(this))}
                type='text'
                className='form-control'
                placeholder='First name'
              />
            </div>
            <div className={colStyle}>
              <input
                onChange={(this.handleLName = this.handleLName.bind(this))}
                type='text'
                className='form-control'
                placeholder='Last name'
              />
            </div>
            <div className={colStyle}>
              <input
                onChange={(this.handleNGrade = this.handleNGrade.bind(this))}
                type='text'
                className='form-control'
                placeholder='Numeric Grade'
              />
            </div>
            <div className={colStyle}>
              <button
                onClick={this.props.handleSubmit}
                name='submitBtn'
                type='button'
                className='btn btn-primary btn-sm btn-block'
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default StudentLister;
