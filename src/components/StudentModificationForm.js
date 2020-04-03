/* This component implements functional and stateful type to make use of */
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';

function StudentModificationForm(props) {
  let [show, setShow] = useState(false);


  if (props.toggleForm) {
    return (
      <>
        <Modal show={props.toggleForm} onHide={props.toggle}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant='primary' onClick={props.toggle}>
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
  toggleForm: false
};
export default StudentModificationForm;
