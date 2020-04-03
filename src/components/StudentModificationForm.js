import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
/* class StudentModificationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fN: '',
      lN: '',
      nG: ''
    };
  }
  render() {
    if (this.props.toggleForm) return (
      null
    );
    else return null;
  }
}
StudentModificationForm.defaultProps = {
  toggleForm: false
};
export default StudentModificationForm; */

function StudentModificationForm(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if (props.toggleForm) return (
    <>
    <Button variant="primary" onClick={handleShow}>
      Launch demo modal
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  );
  else return null
}
StudentModificationForm.defaultProps = {
  toggleForm: false
};
export default StudentModificationForm;