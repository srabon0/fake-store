import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const Reactmodal = (props) => {
    const {title,price,image,description} = props.product;
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="info" onClick={handleShow}>
          Details
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <img src={image} className="w-25 mx-auto" alt="" />
              <h3 className='text-warning'> $ {price} </h3>
              <p className='text-muted' >{description}</p>

          
          </Modal.Body>
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
};

export default Reactmodal;