/* This component implements functional and stateful type to make use of */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import React, { useState } from 'react';

function StudentModificationForm(props) {
  const [nFName, setFName] = useState('');
  const [nLName, setLName] = useState('');
  const [nNGrade, setNGrade] = useState(-2);
  console.log('i wa s called')
  if (props.toggleForm) {
    return (
      <>
        <Modal show={props.toggleForm} onHide={props.toggle}>
          <Modal.Header closeButton>
            <Modal.Title>Modify</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <InputGroup.Text id='basic-addon1'>First Name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={(e) => setFName(e.target.value)}
                placeholder={props.studToModify.fName}
                aria-label='First Name'
                aria-describedby='basic-addon1'
                type='text'
              />
            </InputGroup>

            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <InputGroup.Text id='basic-addon1'>Last Name</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={(e) => setLName(e.target.value)}
                placeholder={props.studToModify.lName}
                aria-label='Last Name'
                aria-describedby='basic-addon1'
                type='text'
              />
            </InputGroup>

            <InputGroup className='mb-3'>
              <InputGroup.Prepend>
                <InputGroup.Text id='basic-addon1'>
                  Numeric Grade
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                onChange={(e) => setNGrade(e.target.value)}
                placeholder={props.studToModify.nGrade}
                aria-label='Numeric Grade'
                aria-describedby='basic-addon1'
                type='number'
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant='primary'
              onClick={props.handleModify.bind(this, [nFName, nLName, nNGrade])}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  } else {
    return null;
  }
}
StudentModificationForm.defaultProps = {
  toggleForm: false,
};
export default StudentModificationForm;
