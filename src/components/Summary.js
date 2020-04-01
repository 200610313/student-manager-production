import React from 'react'
import StudentsPassedList from './StudentsPassedList';
import StudentsFailedList from './StudentsFailedList';

const Summary = (props) => {
  const rowStyle = 'row justify-content-center align-items-center mt-2';
  const colStyle = 'col-sm-6';
  return (
    <div>
      <div className={rowStyle}>
        <div className={colStyle}>
          <StudentsPassedList />
        </div>
        <div className={colStyle}>
          <StudentsFailedList />
        </div>
      </div>
    </div>
  );
};

export default Summary;
