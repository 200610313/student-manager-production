import React from 'react'

const StudentLister = (props) => {
  const rowStyle = 'row justify-content-center align-items-center mt-2';
  const colStyle = 'col';
  return (
    <div>
      <form>
        <div className={rowStyle}>
          <div className={colStyle}>
            <input
              type='text'
              className='form-control'
              placeholder='First name'
            />
          </div>
          <div className={colStyle}>
            <input
              type='text'
              className='form-control'
              placeholder='Last name'
            />
          </div>
          <div className={colStyle}>
            <input
              type='text'
              className='form-control'
              placeholder='Numeric Grade'
            />
          </div>
          <div className={colStyle}>
            <button type='button' className='btn btn-primary btn-sm btn-block'>
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentLister;
