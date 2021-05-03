import React from 'react';
import {Modal} from 'react-bootstrap';
export default function ModalCalendar({show, handleClose}){
	return(
		<Modal show={show} onHide={handleClose} size = "lg">
        <Modal.Header closeButton>
          <Modal.Title>Calendario</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
      </Modal>
      )
}